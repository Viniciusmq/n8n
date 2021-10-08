import {
	INodeProperties,
} from 'n8n-workflow';

export const processingStatusOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'processingStatus',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Buscar status do processamento',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const processingStatusFields = [
	
	/* -------------------------------------------------------------------------- */
	/*                                 Get Status                                 */
	/* -------------------------------------------------------------------------- */
	
	{
		displayName: 'Protocol',
		name: 'statusProtocol',
		type: 'string',
		required: true,
		default: '',		
		displayOptions: {
			show: {
				resource: [
					'processingStatus',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'Request uri.',
	},
] as unknown as INodeProperties[];