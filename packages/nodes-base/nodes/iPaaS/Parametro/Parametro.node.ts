import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import { 
	IAmbiente
} from './AmbienteInterface';

import {
	apiRequest
} from './GenericFunction';
import { parametroFields } from './ParametroDescription';

import { 
	IParametro 
} from './ParametroInterface';

export class Parametro implements INodeType {
	description: INodeTypeDescription = {
        displayName: 'Parametros iPaaS',
        name: 'ParametrosIPaaS',
        icon: 'file:Parametro.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{$parameter["action"]}}',
        description: 'Parâmetros iPaaS API',
        defaults: {
            name: 'Parametros iPaaS',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],      

		properties: [
            // Node properties which the user gets displayed and
            // can change on the node.

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
				displayName: 'Ação',
				name: 'action',
				type: 'options',
				options: [
					{
						name: 'Buscar um parâmetro',
                        description: 'Buscar um parâmetro deste fluxo',
						value: 'get',
					},
					{
						name: 'Buscar todos parâmetros do fluxo',
                        description: 'Buscar parâmetros deste fluxo',
						value: 'getAll',
					},
					{
						name: 'Criar parâmetros',
                        description: 'Criar parâmetros para este fluxo. O nome do parâmetro é identificado como chave',
						value: 'create',
					},
					{
						name: 'Atualizar parâmetros',
                        description: 'Atualizar parâmetros para este fluxo. O ID é obrigatório para atualização.',
						value: 'update',
					},
				],
				default: 'get',
			},
			...parametroFields,
		],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const action = this.getNodeParameter('action', 0) as string;
        const environment = this.getNodeParameter('environment', 0) as string;
		const items = this.getInputData();
		const length = items.length as unknown as number;
		const returnData: IDataObject[] = [];
		let responseData;

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

		for (let i = 0; i < length; i++) {
			//Requisição de get
			if (action === 'get'){
				const nome = this.getNodeParameter('nome', i) as string;
				responseData = await apiRequest.call(this, `/v1/ParametroIncremental/${nome}`, 'GET', env);
			}

			//Requisição de getAll
			if (action === 'getAll'){
				responseData = await apiRequest.call(this, '/v1/ParametroIncremental/', 'GET', env);
			}

			if (action === 'create'){
				const nome = this.getNodeParameter('nome', i) as string;
				const valor = this.getNodeParameter('valor',i) as string;
				const workflow = this.getWorkflow() as any;
				
				const body: IParametro = {
					codigoWorkflow: workflow.id,
					nome: nome,
					valor: valor
				}
				responseData = await apiRequest.call(this, '/v1/ParametroIncremental/', 'POST', env, body)
			}

			if (action === 'update'){
				const id = this.getNodeParameter('id', i) as string;	
				const nome = this.getNodeParameter('nome', i) as string;
				const valor = this.getNodeParameter('valor',i) as string;
				const workflow = this.getWorkflow() as any;
				
				const body: IParametro = {
					codigoWorkflow: workflow.id,
					nome: nome,
					valor: valor
				}
				responseData = await apiRequest.call(this, `/v1/ParametroIncremental/id=${id}`, 'PUT', env, body)
			}
			

			if (Array.isArray(responseData)) {
				returnData.push.apply(returnData, responseData as IDataObject[]);
			} else {
				returnData.push(responseData);
			}
		}

		return [this.helpers.returnJsonArray(returnData)];
				
	}

}

