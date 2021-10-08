import {
	INodeProperties,
} from 'n8n-workflow';

export const dataReceiveOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'dataReceive',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Criar ingestão de dados',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const dataReceiveFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Create Data Receive                      */
	/* -------------------------------------------------------------------------- */
	
	{
		displayName: 'Protocol',
		name: 'protocolDataReceive',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'dataReceive',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Request protocol.',
	},
	{
		displayName: 'Entity',
		name: 'entityDataReceive',
		type: 'options',
		required: true,
		default: '',
		options: [
			{
				name: 'cliente',
				value: 'cliente'
			},
			{
				name: 'propriedade',
				value: 'propriedade'
			},
			{
				name: 'endereco',
				value: 'endereco'
			},
			{
				name: 'item',
				value: 'item'
			},
			{
				name: 'vendedor',
				value: 'vendedor'
			},
			{
				name: 'pedido',
				value: 'pedido'
			},
			{
				name: 'pedido_item',
				value: 'pedido_item'
			},
			{
				name: 'faturamento',
				value: 'faturamento'
			},
			{
				name: 'faturamento_item',
				value: 'faturamento_item'
			},
			{
				name: 'contas_receber',
				value: 'contas_receber'
			},
		],
		displayOptions: {
			show: {
				resource: [
					'dataReceive',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Request entity.',
	},
	{
		displayName: 'Content',
		name: 'contentDataReceive',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'dataReceive',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Request content.',
	},
	{
		displayName: 'Page',
		name: 'pageDataReceive',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'dataReceive',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Request page.',
	},
] as unknown as INodeProperties[];