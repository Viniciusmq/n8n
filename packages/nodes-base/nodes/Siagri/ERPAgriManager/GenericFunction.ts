import {
    IExecuteFunctions,
    ILoadOptionsFunctions,
} from 'n8n-core';

import {
    NodeOperationError,
} from 'n8n-workflow';

export async function apiRequest(this: IExecuteFunctions | ILoadOptionsFunctions, resource: string, method: string, body: any = {}): Promise<any> {

    const credential = await this.getCredentials('ERPAgriManagerApi');

    if (credential === undefined) {
        throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
    }

    var apiBody = JSON.parse(credential.body as string);

    var options = {
        'method': 'POST',
        'url': 'https://api.siagri.com.br/api/auth/token',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: apiBody,
        json: true,
    };

    //Requisição do Token para autenticação
    const responseToken = await this.helpers.request!(options);
    
    const uri = 'https://agrimanagerapi.siagri.com.br';

    let optionsRequest = {
        'method': method,
        'url': `${uri}${resource}`,
        'headers': {
            Authorization: `Bearer ${responseToken.access_token}`,
            'Content-Type': 'application/json'
        },
        body: body,
        json: true,
    }   
    //Requisição dos endpoints de negócio
    let response = await this.helpers.request!(optionsRequest);    
    //Se for POST, aguardar resposta da API e consultar o correlationToken
    if (method === 'POST') {
        const location = response.location;
      
        await sleep(2000);
        optionsRequest = {
            'method': 'GET',
            'url': location,
            'headers': {
                Authorization: `Bearer ${responseToken.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.parse('{}'),
            json: true,
        }        
        response = await this.helpers.request!(optionsRequest);
    }
    
    
    return response;
    
}

function sleep(millis: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, millis));
}