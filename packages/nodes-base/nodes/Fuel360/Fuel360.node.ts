import {
	IExecuteFunctions,
} from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';
import { stringify } from 'querystring';
import { stockOnHandFields } from '../UnleashedSoftware/StockOnHandDescription';
import { Xml } from '../Xml.node';


import {
	fuelingsOperations,
	fuelingsFields,
} from './FuelingsDescription';
import {
	apiRequest
} from './GenericFunction'

import {
	reservoirOperations
} from './ReservoirDescription';

import {
	stockOperations,
	stockFields,
} from './StockDescription';

import {
	suppliesOperations,
	suppliesFields,
} from './SuppliesDescription';

import {
	transfersOperations,
	transfersFields,
} from './TransfersDescription';

export class Fuel360 implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Fuel360',
        name: 'Fuel360',
        icon: 'file:Fuel360.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Fuel360 API',
        defaults: {
            name: 'Fuel360',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
			{
				name: 'Fuel360Api',
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
						name: 'Abastecimento',
						value: 'fuelings',
					},
					{
						name: 'Reservatório',
						value: 'reservoir',
					},
                    {
						name: 'Medição de Estoque',
						value: 'stock',
					},
                    {
						name: 'Entrada',
						value: 'supplies',
					},
                    {
						name: 'Transferência',
						value: 'transfers',
					},
				],
				default: 'fuelings',
				required: true,
				description: 'Resource to consume',
			},

			...fuelingsOperations,
			...fuelingsFields,
			...reservoirOperations,
            ...stockOperations,
            ...stockFields,
            ...suppliesOperations,
            ...suppliesFields,
            ...transfersOperations,
            ...transfersFields,
		],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const items = this.getInputData();
		const length = items.length as unknown as number;
		const returnData: IDataObject[] = [];
		let responseData;

		for (let i = 0; i < length; i++) {
			var start_at = '';
			var end_at = '';
			var updated_after = '';
			var id = '';
			// Get Fuelings
			if (resource === 'fuelings') {
				
				// Get All Fuelings
				if (operation === 'getAll') {
					
					const parameters = this.getNodeParameter('parameters', i) as IDataObject;
					if (parameters.start_at) {
						start_at = parameters.start_at as string;
					}
					if (parameters.end_at) {
						end_at = parameters.end_at as string;
					}
					if (parameters.updated_after) {
						updated_after = parameters.updated_after as string;
					}
					if(parameters.id){
						id = `/${parameters.id as string}` ;
					}
					
					responseData = await apiRequest.call(this, `/fuelings${id}.xml?start_at=${start_at}&end_at=${end_at}&updated_after=${updated_after}`, 'GET');

				}
				
			}

			// Get Stock Pointings
			if (resource === 'stock') {
				
				// Get All Stock Pointings
				if (operation === 'getAll') {
					

					const parameters = this.getNodeParameter('parameters', i) as IDataObject;
					if(parameters.id){
						id = `/${parameters.id as string}` ;
					}
					
					if(parameters.start_at){
						start_at = parameters.start_at as string;
					}

					responseData = await apiRequest.call(this, `/stock_pointings${id}.xml?start_at=${start_at}`, 'GET');

				}
			}

			// Create Supplies
			if (resource === 'supplies') {
				
				// Create Supplies
				if (operation === 'create') {

					const data = this.getNodeParameter('data', i) as Xml;

					responseData = await apiRequest.call(this, `/supplies.xml`, 'POST', data);

				}
			}

			// Get Transfers
			if (resource === 'transfers') {
				
				// Get All Transfers
				if (operation === 'getAll') {
					var updated_after = '';

					const parameters = this.getNodeParameter('parameters', i) as IDataObject;
					if (parameters.updated_after) {
						updated_after = parameters.updated_after as string;
					}

					responseData = await apiRequest.call(this, `/transfers.xml?updated_after=${updated_after}`, 'GET');

				}
			}

			// Get reservoir
			if (resource === 'reservoir') {
				
				// Get All reservoirs
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/reservoirs.xml?`, 'GET');

				}
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
