import {
	INodeProperties,
} from 'n8n-workflow';

export const pedidoVendaOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'pedidoVenda',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todas pedidos de venda da empresa',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Insere Calendarização de testes',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const pedidoVendaFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Create Calendarização                      */
	/* -------------------------------------------------------------------------- */
	
	{
		displayName: 'JSON Body',
		name: 'jsonBody',
		type: 'string',
		required: true,
		default: 1,		
		displayOptions: {
			show: {
				resource: [
					'pedidoVenda',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Body de Inclusão.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                 paginação                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Nº da Página',
		name: 'pageNumberPedidoVenda',
		type: 'number',
		required: true,
		default: 1,		
		displayOptions: {
			show: {
				resource: [
					'pedidoVenda',
				],
				operation: [
					'getAll',
				],
			},
		},
		description: 'Página de resposta.',
	},
	/* -------------------------------------------------------------------------- */
	/*                                 parametros                                 */
	/* -------------------------------------------------------------------------- */	
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameters',
		default: {},
		options: [
			{
				displayName: 'Data emissão inicial',
				name: 'dataEmissaoInicial',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data inicial',
				required: false,

			},
			{
				displayName: 'Data emissão final',
				name: 'dataEmissaoFinal',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data final',
				required: false,

			},
			{
				displayName: 'Data de sincronização',
				name: 'data',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data da última sincronização',
				required: false,

			},
		],
		displayOptions: {
			show: {
				resource: [
					'pedidoVenda',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
] as unknown as INodeProperties[];