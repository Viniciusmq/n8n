import {
	INodeProperties,
} from 'n8n-workflow';

export const protocoloOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'protocolo',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a protocolo',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all protocolo',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const protocoloFields = [

	{
		displayName: 'Nº Página',
		name: 'pageNumberProtocolo',
		type: 'number',
		required: true,
		default: 1,
		displayOptions: {
			show: {
				resource: [
					'protocolo',
				],
				operation: [
					'get',
					'getAll',
				],
			},
		},
		description: 'Número da página para bucar o protocolo.',
	},
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
				displayName: 'Empresa',
				name: 'empresa',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Código da empresa',
				required: false,

			},
			{
				displayName: 'Unidade de Armazenamento',
				name: 'unidadeArmazenamento',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Código da unidade de armazenamento',
				required: false,

			},
			{
				displayName: 'Movimenta Estoque?',
				name: 'movimentaEstoque',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Movimenta estoque (S)im ou (N)ão',
				required: false,

			},
			{
				displayName: 'Número',
				name: 'numero',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Número do documento',
				required: false,

			},
			{
				displayName: 'Produto',
				name: 'produto',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Código do produto',
				required: false,

			},
			{
				displayName: 'Data Sincronização',
				name: 'dataSincronizacao',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Data de última sincronização dos dados para a API',
				required: false,

			},
		],
		displayOptions: {
			show: {
				resource: [
					'protocolo',
				],
				operation: [
					'get',
				],
			},
		},
	},
] as unknown as INodeProperties[];
