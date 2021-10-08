import {
	INodeProperties,
} from 'n8n-workflow';

export const pessoaOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'pessoa',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Busca uma pessoa',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todos pessoais',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];
