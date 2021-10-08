import {
	INodeProperties,
} from 'n8n-workflow';

export const parceiroOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'parceiro',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Busca um Parceiro',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todos os Parceiros',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const parceiroFields = [
	/* -------------------------------------------------------------------------- */
	/*                                 grupo:get                                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Código',
		name: 'codigoParceiro',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'parceiro',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Identificador único do Parceiro.',
	},
] as unknown as INodeProperties[];
