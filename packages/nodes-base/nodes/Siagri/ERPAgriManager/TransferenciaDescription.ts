import {
	INodeProperties,
} from 'n8n-workflow';

export const transferenciaOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'transferencia',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Inserir uma transferência',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const transferenciaFields = [
	
	{
		displayName: 'Empresa',
		name: 'empresa',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'transferencia',
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
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Data e hora do transferencia',
	},
    {
		displayName: 'Número',
		name: 'numero',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Número da transferência',
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
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Observação',
	},
    {
		displayName: 'Usuário',
		name: 'usuario',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do usuário que realizou o transferencia',
	},
    {
		displayName: 'Unid. Armaz. Origem',
		name: 'unidadeArmazenamentoOrigem',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da unidade de armazenamento de origem',
	},
    {
		displayName: 'Unid. Armaz. Destino',
		name: 'unidadeArmazenamentoDestino',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da unidade de armazenamento de destino',
	},
    {
		displayName: 'Produto',
		name: 'produto',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do produto',
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
					'transferencia',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Quantidade',
	},
    
] as unknown as INodeProperties[];