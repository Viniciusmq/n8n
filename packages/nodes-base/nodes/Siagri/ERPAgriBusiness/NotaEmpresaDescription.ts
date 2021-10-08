import {
	INodeProperties,
} from 'n8n-workflow';

export const notaEmpresaOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'notaEmpresa',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todas as notas da empresa',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const notaEmpresaFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 paginação                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Nº da Página',
		name: 'pageNumberNotaEmpresa',
		type: 'number',
		required: true,
		default: 1,		
		displayOptions: {
			show: {
				resource: [
					'notaEmpresa',
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
					'notaEmpresa',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
] as unknown as INodeProperties[];