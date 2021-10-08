import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class ERPAgriBusiness implements ICredentialType {
    name = 'ERPAgriBusinessApi';
    displayName = 'Body Authorization';
    documentationUrl = 'ERPAgriBusiness';
    properties = [
        {
            displayName: 'Body Authorization',
            name: 'body',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
    ];
}