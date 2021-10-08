import {
    ICredentialType,
    NodePropertyTypes,
} from 'n8n-workflow';

export class ERPAgriManager implements ICredentialType {
    name = 'ERPAgriManagerApi';
    displayName = 'Body Authorization';
    documentationUrl = 'ERPAgriManager';
    properties = [
        {
            displayName: 'Body Authorization',
            name: 'body',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
    ];
}