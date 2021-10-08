import {
	INodeProperties,
} from 'n8n-workflow';

export const vendedorOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'vendedor',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Busca um vendedor',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todos vendedores',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

