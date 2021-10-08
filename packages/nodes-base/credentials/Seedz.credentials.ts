import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class Seedz implements ICredentialType {
    name = 'SeedzApi';
    displayName = 'Seedz API';
    documentationUrl = 'Seedz';
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
    ];
}