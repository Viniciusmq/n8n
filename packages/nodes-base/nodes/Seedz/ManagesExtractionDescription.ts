import {
	INodeProperties,
} from 'n8n-workflow';

export const managesExtractionOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'managesExtraction',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Buscar gerenciamento das extrações',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];