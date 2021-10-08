import {
	INodeProperties,
} from 'n8n-workflow';

export const grupoProdutoOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'grupoProduto',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a grupoProduto',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all grupoProdutos',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const grupoProdutoFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 grupo:get                                 */
	/* -------------------------------------------------------------------------- */

	{
		displayName: 'Código',
		name: 'codigoGrupoProduto',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'grupoProduto',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Identificador único do Grupo de Produto.',
	},	
] as unknown as INodeProperties[];
