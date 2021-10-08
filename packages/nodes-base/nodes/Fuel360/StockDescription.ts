import {
	INodeProperties,
} from 'n8n-workflow';

export const stockOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'stock',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Buscar mediação de estoque',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const stockFields = [
	
   
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameters',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'stock',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'start_at',
				name: 'start_at',
				type: 'string',
				required: false,
				default: '',		
				placeholder: 'YYYY-MM-DD',
				
				description: 'Request protocol.',
			},
			{
				displayName: 'id',
				name: 'id',
				type: 'string',
				default: '',
				placeholder: 'Número do id',
				description: 'Número do id',
				required: false,

			},

		],
	}
] as unknown as INodeProperties[];