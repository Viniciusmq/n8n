import {
	INodeProperties,
} from 'n8n-workflow';

export const produtoOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'produto',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a produto',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all produto',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const produtoFields = [

	{
		displayName: 'Código',
		name: 'codigoProduto',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'produto',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Identificador único do Produto.',
	},	
] as unknown as INodeProperties[];
