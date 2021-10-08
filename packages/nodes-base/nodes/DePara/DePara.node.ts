import { IExecuteFunctions, returnJsonArray } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
	WorkflowHooks,
} from 'n8n-workflow';

import {
	get,
	set,
	unset,
} from 'lodash';

import {
	apiRequest
} from './GenericFunction'
import { 
	emailOperation 
} from './emailDescription';
import{
	enviarEmail
}from './EnviarEmail'
import { 
	IAmbiente
} from './AmbienteInterface';
import { report } from 'process';


interface IParametro {
	equivalenciaId: string;
	valorOrigem: string;
	atributo: string;
	reportarAlerta: boolean;
	pararFluxo: boolean
	toEmail: string
}

export class DePara implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Equivalência (De/Para)',
		name: 'dePara',
		icon: 'file:Parametro.svg',
		group: ['transform'],
		version: 1,
		description: 'Gestão de equivalência (De/Para).',
		defaults: {
			name: 'De/Para',
			color: '#772244',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Ambiente',
				name: 'environment',
				type: 'options',
				options: [
					{
						name: 'Desenvolvimento',
						description: 'Ambiente de Desenvolvimento',
						value: 'dev',
					},
					{
						name: 'QA',
						description: 'Ambiente de QA',
						value: 'qa',
					},
					{
						name: 'Produção',
						description: 'Ambiente de Produção',
						value: 'prod',
					},
				],
				default: 'dev',
			},
			
			{
				displayName: 'De/Para',
				name: 'dePara',
				placeholder: 'Adicinar novo De/Para',
				description: 'Informar parâmetros para a realização do De/Para.',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
					sortable: true,
				},
				default: {},
				options: [
					
					
					{
						displayName: 'Parâmetros para Equivalência',
						name: 'parametros',
						values: [
							{
								displayName: 'Equivalência ID',
								name: 'equivalenciaId',
								type: 'string',
								default: '',
								placeholder: 'ID da equivalência a ser buscado.',
								description: 'ID da equivalência a ser buscado.',
							},
							{
								displayName: 'Valor Origem',
								name: 'valorOrigem',
								type: 'string',
								default: '',
								placeholder: 'Valor de origem para encontrar equivalência.',
								description: 'Valor de origem para encontrar equivalência.',
							},
							{
								displayName: 'Atributo',
								name: 'atributo',
								type: 'string',
								default: '',
								placeholder: 'Nome do atributo a ter seu valor alterado.',
								description: 'Nome do atributo a ter seu valor alterado.',
							},
							{
								displayName: 'Reportar Alerta',
								name: 'reportarAlerta',
								type: 'boolean',
								default: false,
								description: 'Email address of the sender optional with name.',
							},	
							...emailOperation,

						],
					},
					
				],
			
			},
			
		],
	};


	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const items = this.getInputData();

		const returnData: INodeExecutionData[] = [];
		var responseData;
		let item: INodeExecutionData;
		let newItem: INodeExecutionData;
		const environment = this.getNodeParameter('environment', 0) as string;
		
		
		let env: IAmbiente = {url: '', url_auth:'', user:'', pass:''};
		
		if (environment === 'dev'){
            env = {
				url: 'https://ipaas.dev.conexa.com.br/api/backoffice',
            	url_auth: 'https://auth.dev.conexa.com.br/connect/token',
            	user: 'engenharia@hubconexa.com',
            	pass: '123456789'
			}		
        }
		if (environment === 'qa'){
            env = {
				url: 'https://ipaas.qa.conexa.com.br/api/backoffice',
            	url_auth: 'https://auth.qa.conexa.com.br/connect/token',
            	user: 'engenharia@hubconexa.com',
            	pass: '123456789'
			}
		}
		if (environment === 'prod'){
            env = {
				url: 'https://ipaas-workflow.conexa.com.br/api/backoffice',
            	url_auth: 'https://auth.conexa.com.br/connect/token',
            	user: 'engenharia@hubconexa.com',
            	pass: '123456789'
			}
		}
		
		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
			
			const parametros = this.getNodeParameter('dePara.parametros', itemIndex, []) as Array<IParametro>;
			this.getInputData
			
			for (const parametro of parametros) {
							
				item = items[itemIndex];
				responseData = await apiRequest.call(this, env,`/v1/equivalenciaValor?EquivalenciaId=${parametro.equivalenciaId}&ValorOrigem=${parametro.valorOrigem}`, 'GET');
				responseData = responseData[0];

				newItem = {
					json: JSON.parse(JSON.stringify(item.json)),
				};

				if (responseData !== undefined) {

					console.log(newItem);
					set(newItem.json, parametro.atributo, responseData.valorEquivalente),
					returnData.push(newItem);

				} else {
					if(parametro.reportarAlerta === true){
						console.log('entrou');

						const fluxo = this.getWorkflow()
						var equivalencia = await apiRequest.call(this,env,`/v1/equivalencia?Id=${parametro.equivalenciaId}`, 'GET');
						equivalencia = equivalencia[0];
						console.log('Equivalencia = ',equivalencia.nome);
						console.log('Fluxo: ',fluxo.name)
						
						await enviarEmail.call(this,parametro.toEmail ,equivalencia.nome, parametro.valorOrigem, fluxo.name as string, JSON.stringify(item.json));
						
						if(parametro.pararFluxo === true){
							throw new NodeOperationError(this.getNode(), 'Não há Valor Equivalente para De/Para');
						}  
					}
					
									
					set(newItem.json, parametro.atributo, ''),
					returnData.push(newItem);
					break;
				}
				
			}
		}
		return [returnData];
	}
}
