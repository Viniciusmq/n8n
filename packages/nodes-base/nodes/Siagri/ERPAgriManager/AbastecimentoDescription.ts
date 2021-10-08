import {
	INodeProperties,
} from 'n8n-workflow';

export const abastecimentoOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Inserir um abastecimento',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const abastecimentoFields = [
	
	{
		displayName: 'Empresa',
		name: 'empresa',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Empresa',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Número do abastecimento',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Data e hora do abastecimento',
	},
    {
		displayName: 'Máquina Destino',
		name: 'maquinaDestino',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da máquina destino do abastecimento',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da Unidade de Armazenamento de saída do produto',
	},
    {
		displayName: 'Km ou Horímetro',
		name: 'kmHorimetro',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Km ou Horímetro da máquina abastecida (de acordo com o destino)',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Observação',
	},
    {
		displayName: 'Atividade',
		name: 'atividade',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da atividade',
	},
    {
		displayName: 'Operação',
		name: 'operacao',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código da operacao',
	},
    {
		displayName: 'Bomba',
		name: 'bomba',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'código da bomba',
	},
    {
		displayName: 'Registradora Inicial',
		name: 'registradoraInicial',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Marcador inicial da bomba',
	},
    {
		displayName: 'Registradora Final',
		name: 'registradoraFinal',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Marcador final da bomba',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do produto do abastecimento',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Quantidade abastecida',
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
					'abastecimento',
				],
				operation: [
					'create',
				],
			},
		},
		description: 'Código do usuário que realizou o abastecimento',
	},
    
] as unknown as INodeProperties[];