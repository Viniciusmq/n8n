import {
    IExecuteFunctions,
    ILoadOptionsFunctions,
} from 'n8n-core';
import { 
	IAmbiente
} from './AmbienteInterface';
import {
    INodeExecutionData,
    NodeOperationError,
} from 'n8n-workflow';
import { deleteDatapoint } from '../Beeminder/Beeminder.node.functions';
import { Xml } from '../Xml.node';

export async function apiRequest(this: IExecuteFunctions | ILoadOptionsFunctions, env: IAmbiente ,resource: string, method: string, body?: Xml): Promise<any> {
    
    var options = {
        'method': 'POST',
        'url': env.url_auth,//'https://auth.dev.conexa.com.br/connect/token',
        'headers': {
        },
        formData: {
          'grant_type': 'password',
          'access_token': env.url_auth,//'https://auth.dev.conexa.com.br/connect/token',
          'client_id': 'ipaas-client',
          'client_secret': 'C7AC9BFE-44CE-4C5E-A3C6-A62F06E67DF2',
          'username': env.user,//'engenharia@hubconexa.com',
          'password': env.pass,//'123456789',
          'scope': 'ipaas'
        },
        'rejectUnauthorized': false
    };
    
    var response = await this.helpers.request!(options);
    //console.log(response)
    response = JSON.parse(response)
    


    let optionsRequest = {
        'method': 'GET',
        'url': `${env.url}${resource}`,
        'headers': {
            'Authorization': `Bearer ${response.access_token}`,
        },
        'rejectUnauthorized': false
    }
    //console.log(optionsRequest);
    const data = await this.helpers.request!(optionsRequest);
    //console.log(data);
    var dado = JSON.parse(data)
    return dado.data;

}