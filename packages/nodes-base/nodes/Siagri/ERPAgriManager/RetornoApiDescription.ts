import {
	INodeProperties,
} from 'n8n-workflow';

export const retornoApiOperation = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'retornoApi',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Verificar status do Token',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const retornoApiFields = [
	
	{
		displayName: 'Correletion Token',
		name: 'correlationToken',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'retornoApi',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Retorno Api',
	},
] as unknown as INodeProperties[];