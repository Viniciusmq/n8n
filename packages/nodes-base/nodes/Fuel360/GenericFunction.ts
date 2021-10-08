import {
    IExecuteFunctions,
    ILoadOptionsFunctions,
} from 'n8n-core';

import {
    INodeExecutionData,
    NodeOperationError,
} from 'n8n-workflow';
import { Xml } from '../Xml.node';

export async function apiRequest(this: IExecuteFunctions | ILoadOptionsFunctions, resource: string, method: string, body?: Xml): Promise<any> {

    const credential = this.getCredentials('Fuel360Api');

    if (credential === undefined) {
        throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
    }

    const credentials = {
        username: credential.username as string,
        password: credential.password as string
    }
   
    const uri = credential.uri;

    const optionsRequest = {
        'method': method,
        'url': `${uri}${resource}`,
        'headers': {
            'x-lf-source': 'ipaas',
            'Content-Type': 'application/xml'
        },
        body: body,
        auth: credentials,
        gzip: true,
        rejectUnauthorized: true,
    }

    const response = await this.helpers.request!(optionsRequest);

    return {data: response};

}