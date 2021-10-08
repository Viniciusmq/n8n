import {
	INodeProperties,
} from 'n8n-workflow';

export const autenticacaoOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'autenticacao',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create Authentication',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];