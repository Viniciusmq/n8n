import {
	INodeProperties,
} from 'n8n-workflow';

export const emailOperation = [
    {
		displayName: 'Parar Fluxo',
		name: 'pararFluxo',
		type: 'boolean',
		displayOptions: {
			show: {
				reportarAlerta:[
                    true,
                ]
			},
		},
		default: false,
		description: 'Reportar falta de De/Para via email e parar o fluxo em execução.',
	},
	{
		displayName: 'Email Destinatário',
		name: 'toEmail',
		type: 'string',
		displayOptions: {
			show: {
				reportarAlerta:[
                    true,
                ]
			},
		},
		default: '',
		description: 'Reportar falta de De/Para via email.',
	},
    
] as INodeProperties[];
