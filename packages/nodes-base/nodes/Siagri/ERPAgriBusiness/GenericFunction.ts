import {
    IExecuteFunctions,
    ILoadOptionsFunctions,
} from 'n8n-core';

import {
    NodeOperationError,
} from 'n8n-workflow';

export async function apiRequest(this: IExecuteFunctions | ILoadOptionsFunctions, resource: string, method: string, body?: JSON) {

    const credential = await this.getCredentials('ERPAgriBusinessApi');

    if (credential === undefined) {
        throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
    }

    var apiBody = JSON.parse(credential.body as string);

    var options = {
        'method': 'POST',
        'url': 'https://siagriapihomolog.azurewebsites.net/api/auth/token',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: apiBody,
        json: true,
    };

    var response = await this.helpers.request!(options);
    
    const uri = 'https://apiagbhomolog.azurewebsites.net';

    let optionsRequest = {
        'method': method,
        'url': `${uri}${resource}`,
        'headers': {
            Authorization: `Bearer ${response.access_token}`,
            'Content-Type': 'application/json'
        },
        body: body,
        json: true,
    }
    
    var response = await this.helpers.request!(optionsRequest);

    return response;
}