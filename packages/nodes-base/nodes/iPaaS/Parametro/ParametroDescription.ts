import {
	INodeProperties,
} from 'n8n-workflow';
import { IAmbiente } from './AmbienteInterface';
import { apiRequest } from './GenericFunction';

export const parametroFields = [

	{
		displayName: 'Nome',
		name: 'nome',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				action: [
					'create',
					'get',
					'update',
				],
			},
		},
		description: 'Nome identificador do parâmetro deste fluxo.',
	},	
	{
		displayName: 'Valor',
		name: 'valor',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				action: [
					'create',
					'update',
				],
			},
		},
		description: 'Nome identificador do parâmetro deste fluxo.',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				action: [
					'update',
				],
			},
		},
		description: 'ID do parâmetro deste fluxo.',
	},
] as unknown as INodeProperties[];