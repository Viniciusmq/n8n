import {
	INodeProperties,
} from 'n8n-workflow';

export const authenticationOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'authentication',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create Authentication',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
] as INodeProperties[];