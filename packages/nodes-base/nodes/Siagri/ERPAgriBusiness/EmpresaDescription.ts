import {
	INodeProperties,
} from 'n8n-workflow';

export const empresaOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'empresa',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get empresa',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all empresas',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];