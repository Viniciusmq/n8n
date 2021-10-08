import {
    IExecuteFunctions,
    ILoadOptionsFunctions,
} from 'n8n-core';

import {
    IAmbiente 
} from './AmbienteInterface';

export async function apiRequest(this: IExecuteFunctions | ILoadOptionsFunctions, resource: string, method: string, environment: IAmbiente, body: any = {}): Promise<any> {

    const optionsRequest = {
        'method': 'POST',
        'url': environment.url_auth,
        'headers': {
            'Content-Type': 'application/json'
        },
        formData: {
            'username': environment.user,
            'password': environment.pass,
            'client_id': 'ipaas-client',
            'client_secret': 'C7AC9BFE-44CE-4C5E-A3C6-A62F06E67DF2',
            'grant_type': 'password',
            'scope': 'ipaas'
        },
        rejectUnauthorized: false
    }

    const responseToken = await this.helpers.request!(optionsRequest);

    let options = {
        'method': method,
        'url': `${environment.url}${resource}`,
        'headers': {
            'x-lf-source': 'ipaas',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${responseToken.access_token}`,
            'x-tenant': '81093CD9-6E63-4381-9322-D7D3C1D186AE'
        },
        body: JSON.stringify(body),
        rejectUnauthorized: false,
    }
    console.log(options);
    const response = this.helpers.request!(options);
    console.log(JSON.stringify(response));
    return response;

}