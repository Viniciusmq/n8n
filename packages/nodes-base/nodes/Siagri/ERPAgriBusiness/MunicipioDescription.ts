import {
	INodeProperties,
} from 'n8n-workflow';

export const municipioOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'municipio',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Busca um município',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Busca todos municipios',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const municipioFields = [

	{
		displayName: 'Cod. IBGE',
		name: 'codigoIBGE',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'municipio',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Código do IBGE.',
	},
] as unknown as INodeProperties[];