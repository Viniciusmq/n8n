import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class Fuel360 implements ICredentialType {
    name = 'Fuel360Api';
    displayName = 'Fuel360 API';
    documentationUrl = 'Fuel360';
    properties = [
        {
            displayName: 'User name',
            name: 'username',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
        {
            displayName: 'Password',
            name: 'password',
            type: 'string' as NodePropertyTypes,
            default: '',
            typeOptions: {
				password: true,
			},
        },
        {
            displayName: 'Uri',
            name: 'uri',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
    ];
}