import {
	INodeProperties,
} from 'n8n-workflow';

export const notaTerceiroOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'notaTerceiro',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todas as notas de terceiros',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const notaTerceiroFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 paginação                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Nº da Página',
		name: 'pageNumberNotaTerceiro',
		type: 'number',
		required: true,
		default: 1,		
		displayOptions: {
			show: {
				resource: [
					'notaTerceiro',
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
				displayName: 'Data recebimento inicial',
				name: 'dataRecebimentoInicial',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD HH:MM:SS',
				description: 'Data inicial',
				required: false,

			},
			{
				displayName: 'Data recebimento final',
				name: 'dataRecebimentoFinal',
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
					'notaTerceiro',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
] as unknown as INodeProperties[];