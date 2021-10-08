import {
	INodeProperties,
} from 'n8n-workflow';

export const suppliesOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'supplies',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Inserir entrada de combustível',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const suppliesFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Post Entrada de Combustíveis               */
	/* -------------------------------------------------------------------------- */
	
    {
		displayName: 'XML Data',
		name: 'data',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'supplies',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Request protocol.',
	},
] as unknown as INodeProperties[];