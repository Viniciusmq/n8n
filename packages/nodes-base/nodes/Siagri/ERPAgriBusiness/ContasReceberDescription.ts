import {
	INodeProperties,
} from 'n8n-workflow';

export const contaReceberOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'contaReceber',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todas as contas a receber',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const contaReceberFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 paginação                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Nº da Página',
		name: 'pageNumbercontaReceber',
		type: 'number',
		required: true,
		default: 1,		
		displayOptions: {
			show: {
				resource: [
					'contaReceber',
				],
				operation: [
					'getAll',
				],
			},
		},
		description: 'Página de resposta.',
	},
	{
		displayName: 'Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameters',
		default: {},
		options: [
			{
				displayName: 'Data Emissão inicial',
				name: 'dataEmissaoInicial',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data inicial',
				required: false,

			},
			{
				displayName: 'Data Emissão final',
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
					'contaReceber',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
] as unknown as INodeProperties[];