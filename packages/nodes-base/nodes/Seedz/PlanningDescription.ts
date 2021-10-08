import {
	INodeProperties,
} from 'n8n-workflow';

export const planningOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'planning',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Criar planejamento de ingestão de dados',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const planningFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Entities                                    */			
	/* -------------------------------------------------------------------------- */	
	{
		displayName: 'Entities',
		name: 'entities',
		type: 'fixedCollection',
		placeholder: 'Add Entity',		
		typeOptions: {
			multipleValues: true,
			sortable: true,
		},		
		default: {},
		displayOptions: {
			show: {
				resource: [
					'planning',
				],
				operation: [
					'create',
				],
			},
		},
		//Adicionar nova entidade aqui
		options: [
			{
				name: 'cliente',
				displayName: 'Cliente',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'propriedade',
				displayName: 'Propriedade',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'endereco',
				displayName: 'Endereço',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'item',
				displayName: 'Item',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'pedido',
				displayName: 'Pedido',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'pedido_item',
				displayName: 'Pedido Item',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'faturamento',
				displayName: 'Faturamento',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'faturamento_item',
				displayName: 'Faturamento Item',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'contas_receber',
				displayName: 'Contas a Receber',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},
			{
				name: 'vendedor',
				displayName: 'Vendedor',
				values: [
					{
						displayName: 'qntPages',
						name: 'qntPages',
						type: 'number',						
						default: 0,
						description: 'Number of pages',
					},
					{
						displayName: 'qntRegisters',
						name: 'qntRegisters',
						type: 'number',
						default: 0,
						description: 'Number of registers',
					},
				],
			},

		],
	},	
] as unknown as INodeProperties[];