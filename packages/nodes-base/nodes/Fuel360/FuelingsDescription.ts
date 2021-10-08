import {
	INodeProperties,
} from 'n8n-workflow';

export const fuelingsOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'fuelings',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Buscar abastecimentos',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const fuelingsFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Get Abastecimentos                         */
	/* -------------------------------------------------------------------------- */
	
    {
		displayName: 'Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameters',
		default: {},
		options: [
			{
				displayName: 'start_at',
				name: 'start_at',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Data inicial',
				required: false,

			},
			{
				displayName: 'end_at',
				name: 'end_at',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Data final',
				required: false,

			},
			{
				displayName: 'updated_after',
				name: 'updated_after',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data da última alteração',
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
					'fuelings',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
] as unknown as INodeProperties[];