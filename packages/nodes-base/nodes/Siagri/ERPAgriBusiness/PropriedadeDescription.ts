import {
	INodeProperties,
} from 'n8n-workflow';

export const propriedadeOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'propriedade',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Busca uma propriedade',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todos as propriedades',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];