import {
	INodeProperties,
} from 'n8n-workflow';

export const inventarioOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Inserir um inventario',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const inventarioFields = [
	
	{
		displayName: 'Empresa',
		name: 'empresa',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Empresa',
	},
    {
		displayName: 'Data',
		name: 'data',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Data e hora do inventario',
	},
    {
		displayName: 'Unidade de Armaz.',
		name: 'unidadeArmazenamento',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da Unidade de Armazenamento de saída do produto',
	},
    {
		displayName: 'Observação',
		name: 'observacao',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Observação',
	},
	{
		displayName: 'Operação Entrada',
		name: 'operacaoEntrada',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da operação de entrada',
	},
	{
		displayName: 'Operação Saída',
		name: 'operacaoSaida',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da operação de saída',
	},
    {
		displayName: 'Responsável',
		name: 'responsavel',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do responsável que realizou o inventario',
	},
    {
		displayName: 'Tipo Ajuste',
		name: 'tipoAjuste',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do tipo de ajuste do (F)ísico), (V)alor, (A)mbos',
	},
    {
		displayName: 'Material',
		name: 'material',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do material',
	},
    {
		displayName: 'Quantidade',
		name: 'quantidade',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Quantidade',
	},
	{
		displayName: 'ID Externo',
		name: 'idExterno',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'inventario',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Identificador externo',
	},
    
] as unknown as INodeProperties[];