import {
	INodeProperties,
} from 'n8n-workflow';

export const transfersOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'transfers',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Buscar transferências',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const transfersFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Get Transferências                         */
	/* -------------------------------------------------------------------------- */
	
    {
		displayName: 'Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameters',
		default: {},
		options: [
			{
				displayName: 'updated_after',
				name: 'updated_after',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data de alteração',
				required: false,

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
		displayOptions: {
			show: {
				resource: [
					'transfers',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
] as unknown as INodeProperties[];