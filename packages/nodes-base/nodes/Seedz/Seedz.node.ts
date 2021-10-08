import {
	IExecuteFunctions,
} from 'n8n-core';

import {
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';


import {
	dataReceiveOperations,
	dataReceiveFields,
} from './DataReceiveDescription';

import {
	managesExtractionOperations,
} from './ManagesExtractionDescription';

import {
	planningOperations,
	planningFields,
} from './PlanningDescription';

import {
	processingStatusOperations,
	processingStatusFields,
} from './ProcessingStatusDescription';

import {
	IEntity,
} from './PlanningInterface';


export class Seedz implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Seedz',
        name: 'Seedz',
        icon: 'file:Seedz.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Seedz API',
        defaults: {
            name: 'Seedz',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
			{
				name: 'SeedzApi',
				required: true,
				displayOptions: {
					show: {
						authentication: [
							'basicAuth',
						],
					},
				},
			},			
        ],
        properties: [
            // Node properties which the user gets displayed and
            // can change on the node.
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'Basic Auth',
						value: 'basicAuth',
					},
				],
				default: 'basicAuth',
				description: 'The way to authenticate.',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Planning',
						value: 'planning',
					},
					{
						name: 'Data Receive',
						value: 'dataReceive',
					},
					{
						name: 'Processing Status',
						value: 'processingStatus',
					},
					{
						name: 'Manages Extraction',
						value: 'managesExtraction',
					},
				],
				default: 'planning',
				required: true,
				description: 'Resource to consume',
			},

			...dataReceiveOperations,
			...dataReceiveFields,
			...managesExtractionOperations,
			...planningOperations,
			...planningFields,			
			...processingStatusOperations,
			...processingStatusFields,
		],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const authentication = this.getNodeParameter('authentication', 0) as string;
		const uri = 'https://landing-dev.seedz.ag/api/v1'; //Production
		var access_token = '';
		var credentials  = undefined;

		try {
			credentials = this.getCredentials('SeedzApi');
		} catch (error) {
			throw new NodeOperationError(this.getNode(), 'Credentials is not set!');
		}		

		/** Authentication **/
		if (authentication == 'basicAuth') {

			const options = {
				method: "POST",
				headers : {
					//"Host": "landing-dev.seedz.ag",
					//"Content-Length": "77",
					//"x-lf-source": "ipaas",
					"User-Agent": "ipaas",
					"Content-Type": "application/json"
				},
				body: credentials,
				url: `https://landing-dev.seedz.ag/api/v1/auth/login`, //Production
				json: true
			};			
			const response = await this.helpers.request(options);
			access_token = this.helpers.returnJsonArray(response)[0].json.accessToken as string;
		}

		// Data Receive
		if (resource === 'dataReceive') {
			
			// Create Data Receive
			if (operation === 'create') {
				const protocolDataReceive = this.getNodeParameter('protocolDataReceive', 0) as string;
				const entityDataReceive = this.getNodeParameter('entityDataReceive', 0) as string;
				const contentDataReceive = this.getNodeParameter('contentDataReceive', 0) as string;
				const pageDataReceive = this.getNodeParameter('pageDataReceive', 0) as string;

				//Retirar o objeto 'json:{}' que é inserido automaticamento nos retornos do n8n através de string replace e regExp
				var contentData = JSON.stringify(contentDataReceive);
				const regExpJson = new RegExp('"json":{', 'g');
				const regExpChave = new RegExp('}}', 'g');
				contentData = contentData.toString().replace(regExpJson,"").replace(regExpChave, "}");
				contentData = JSON.parse(contentData);


				const bodyDataReceive = {
					protocol: protocolDataReceive,
					entity: entityDataReceive,
					content: contentData,
					page: pageDataReceive
				}

				const options = {
					method: "POST",
					headers : {
						"User-Agent": "ipaas",
						"Content-Type": "application/json",
						"Authorization": `Bearer ${access_token}`,
					},
					body: bodyDataReceive,
					uri: uri + `/data/receive`,
					json: true
				};

				const response = await this.helpers.request(options);
				return [this.helpers.returnJsonArray(response)];
			}
		}

		// Manages Extraction
		if (resource === 'managesExtraction') {
			
			// Get Manages Extraction
			if (operation === 'get') {
				const options = {
					method: "GET",
					headers : {
						"User-Agent": "ipaas",
						"Content-Type": "application/json",
						"Authorization": `Bearer ${access_token}`,
					},
					uri: uri + `/data/managesExtraction`,
					json: true
				};
				console.log(options);
				const response = await this.helpers.request(options);
				return [this.helpers.returnJsonArray(response)];
			}
		}
		
		// Planning
		if (resource === 'planning') {
			
			// Create Planning
			if (operation === 'create') {

				const summary = [];
				//Adicionar nova entidade aqui
				summary.push(getEntity('cliente', this.getNodeParameter('entities.cliente', 0, []) as Array<IEntity>));
				summary.push(getEntity('propriedade', this.getNodeParameter('entities.propriedade', 0, []) as Array<IEntity>));
				summary.push(getEntity('endereco', this.getNodeParameter('entities.endereco', 0, []) as Array<IEntity>));
				summary.push(getEntity('item', this.getNodeParameter('entities.item', 0, []) as Array<IEntity>));
				summary.push(getEntity('vendedor', this.getNodeParameter('entities.vendedor', 0, []) as Array<IEntity>));
				summary.push(getEntity('pedido', this.getNodeParameter('entities.pedido', 0, []) as Array<IEntity>));
				summary.push(getEntity('pedido_item', this.getNodeParameter('entities.pedido_item', 0, []) as Array<IEntity>));
				summary.push(getEntity('faturamento', this.getNodeParameter('entities.faturamento', 0, []) as Array<IEntity>));
				summary.push(getEntity('faturamento_item', this.getNodeParameter('entities.faturamento_item', 0, []) as Array<IEntity>));
				summary.push(getEntity('contas_receber', this.getNodeParameter('entities.contas_receber', 0, []) as Array<IEntity>));
			
				const planningBody = {
					summary: summary					
				}

				const options = {
					method: "POST",
					headers : {
						"User-Agent": "ipaas",
						"Content-Type": "application/json",
						"Authorization": `Bearer ${access_token}`,
					},
					body: planningBody,
					uri: uri + `/processing/planning`,
					json: true
				};

				const response = await this.helpers.request(options);
				return [this.helpers.returnJsonArray(response)];

				function getEntity(entity: string, aEntity: Array<IEntity>) {					
					const arr = {entity: entity, qntPages: 0, qntRegisters: 0};
					if (aEntity === []) {
						arr.entity = entity;
						arr.qntPages = 0;
						arr.qntRegisters = 0;
					} else {
						for (const item of aEntity) {
							arr.entity = entity;
							arr.qntPages = item.qntPages;
							arr.qntRegisters = item.qntRegisters;
						}
					}
					return arr;					
				}
			}
		}

		// Processing Status
		if (resource === 'processingStatus') {
			
			// Get Processing Status
			if (operation === 'get') {
				const statusProtocol = this.getNodeParameter('statusProtocol', 0);
				const options = {
					method: "GET",
					headers : {
						"User-Agent": "ipaas",
						"Content-Type": "application/json",
						"Authorization": `Bearer ${access_token}`,
					},
					uri: uri + `/processing/status/${statusProtocol}`,
					json: true
				};
				const response = await this.helpers.request(options);
				return [this.helpers.returnJsonArray(response)];
			}
		}

		return [[]];
				
	}
}

