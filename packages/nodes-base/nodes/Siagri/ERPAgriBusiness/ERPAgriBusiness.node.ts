import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';


import {
	contaReceberOperations,
	contaReceberFields,
} from './ContasReceberDescription';

import {
	empresaOperations,
} from './EmpresaDescription';

import {
	grupoProdutoOperations,
	grupoProdutoFields,
} from './GrupoProdutoDescription';

import {
	municipioOperations,
	municipioFields,
} from './MunicipioDescription';

import {
	notaEmpresaOperations,
	notaEmpresaFields,
} from './NotaEmpresaDescription';

import {
	notaTerceiroOperations,
	notaTerceiroFields,
} from './NotaTerceiroDescription';

import {
	parceiroOperations,
	parceiroFields,
} from './ParceiroDescription';

import {
	pedidoVendaOperations,
	pedidoVendaFields,
} from './PedidoVendaDescription';

import {
	pessoaOperations,
} from './PessoaDescription';

import {
	produtoOperations,
} from './ProdutoDescription';

import {
	propriedadeOperations,
} from './PropriedadeDescription';

import {
	vendedorOperations,
} from './VendedorDescription';

import {
	apiRequest
} from './GenericFunction'

export class ERPAgriBusiness implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ERPAgriBusiness',
		name: 'ERPAgriBusiness',
		icon: 'file:ERPAgriBusiness.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'SIAGRI ERP AgriBusiness API',
		defaults: {
			name: 'ERPAgriBusiness',
			color: '#1A82e2',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'ERPAgriBusinessApi',
				required: true,
				displayOptions: {
					show: {
						authentication: [
							'oAuth2',
						],
					},
				},
			},
		],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'OAuth2',
						value: 'oAuth2',
					},
				],
				default: 'oAuth2',
				description: 'The way to authenticate.',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Contas a Receber',
						value: 'contaReceber',
					},
					{
						name: 'Empresa',
						value: 'empresa',
					},
					{
						name: 'Grupo de Produto',
						value: 'grupoProduto',
					},
					{
						name: 'Município',
						value: 'municipio',
					},
					{
						name: 'Nota da Empresa',
						value: 'notaEmpresa',
					},
					{
						name: 'Nota de Terceiros',
						value: 'notaTerceiro',
					},
					{
						name: 'Parceiro',
						value: 'parceiro',
					},
					{
						name: 'Pedido de Venda',
						value: 'pedidoVenda',
					},
					{
						name: 'Pessoa',
						value: 'pessoa',
					},
					{
						name: 'Produto',
						value: 'produto',
					},
					{
						name: 'Propriedade',
						value: 'propriedade',
					},
					{
						name: 'Vendedor',
						value: 'vendedor',
					},
				],
				default: 'Parceiro',
				required: true,
				description: 'Resource to consume',
			},
			...contaReceberOperations,
			...contaReceberFields,
			...empresaOperations,
			...grupoProdutoOperations,
			...municipioFields,
			...municipioOperations,
			...grupoProdutoFields,
			...notaEmpresaOperations,
			...notaEmpresaFields,
			...notaTerceiroOperations,
			...notaTerceiroFields,
			...pedidoVendaOperations,
			...pedidoVendaFields,
			...parceiroOperations,
			...parceiroFields,
			...pessoaOperations,
			...produtoOperations,
			...propriedadeOperations,
			...vendedorOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		let responseData;
		const returnData: IDataObject[] = [];

		// Contas a Receber
		if (resource === 'contaReceber') {

			// get All Contas a Receber
			if (operation === 'getAll') {
				const pageNumbercontaReceber = this.getNodeParameter('pageNumbercontaReceber', 0) as number;
				var dataEmissaoInicial = '';
				var dataEmissaoFinal = '';
				var data = '';
				const parameters = this.getNodeParameter('parameters', 0) as IDataObject;
				if (parameters.dataEmissaoInicial) {
					dataEmissaoInicial = parameters.dataEmissaoInicial as string;
				}
				if (parameters.dataEmissaoFinal) {
					dataEmissaoFinal = parameters.dataEmissaoFinal as string;
				}
				if (parameters.data) {
					data = parameters.data as string;
				}

				responseData = await apiRequest.call(this, `/financeiro/documentosreceber?dataEmissaoInicial=${dataEmissaoInicial}&dataEmissaoFinal=${dataEmissaoFinal}&pageNumber=${pageNumbercontaReceber}&data=${data}`, 'GET');
				
			}

		}

		// Empresa
		if (resource === 'empresa') {

			// get All Empresas
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/configuracoes/empresas`, 'GET');
			}

		}

		// grupoProdutos
		if (resource === 'grupoProduto') {

			// get All grupoProdutos
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/produtos/grupos`, 'GET');
			}

			// get grupoProdutos
			if (operation === 'get') {
				const codigoGrupoProduto = this.getNodeParameter('codigoGrupoProduto', 0) as number;

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/produtos/grupos/${codigoGrupoProduto}`, 'GET');

			}
		}

		// Municipio
		if (resource === 'municipio') {

			// get All Municipios
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/regioesatuacao/municipios`, 'GET');
			}

			// get Municipio
			if (operation === 'get') {
				const codigoIBGE = this.getNodeParameter('codigoIBGE', 0) as number;

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/regioesatuacao/municipios?codigoIbge=${codigoIBGE}`, 'GET');

			}
		}

		// Notas da Empresa
		if (resource === 'notaEmpresa') {

			// get All Notas da Empresa
			if (operation === 'getAll') {
				const pageNumberNotaEmpresa = this.getNodeParameter('pageNumberNotaEmpresa', 0) as number;
				let dataEmissaoInicial = '';
				let dataEmissaoFinal = '';
				let data = '';
				const parameters = this.getNodeParameter('parameters', 0) as IDataObject;
				if (parameters.dataEmissaoInicial) {
					dataEmissaoInicial = parameters.dataEmissaoInicial as string;
				}
				if (parameters.dataEmissaoFinal) {
					dataEmissaoFinal = parameters.dataEmissaoFinal as string;
				}
				if (parameters.data) {
					data = parameters.data as string;
				}

				responseData = await apiRequest.call(this, `/vendas/movimentacoes/notas?dataEmissaoInicial=${dataEmissaoInicial}&dataEmissaoFinal=${dataEmissaoFinal}&pageNumber=${pageNumberNotaEmpresa}&data=${data}`, 'GET');
			}

		}

		// Notas de Terceiros
		if (resource === 'notaTerceiro') {

			// get All Notas de terceiros
			if (operation === 'getAll') {
				const pageNumberNotaTerceiro = this.getNodeParameter('pageNumberNotaTerceiro', 0) as number;
				var dataRecebimentoInicial = '';
				var dataRecebimentoFinal = '';
				var data = '';
				const parameters = this.getNodeParameter('parameters', 0) as IDataObject;
				if (parameters.dataRecebimentoInicial) {
					dataRecebimentoInicial = parameters.dataRecebimentoInicial as string;
				}
				if (parameters.dataRecebimentoFinal) {
					dataRecebimentoFinal = parameters.dataRecebimentoFinal as string;
				}
				if (parameters.data) {
					data = parameters.data as string;
				}

				responseData = await apiRequest.call(this, `/vendas/movimentacoes/notasterceiros?dataRecebimentoInicial=${dataRecebimentoInicial}&dataRecebimentoFinal=${dataRecebimentoFinal}&pageNumber=${pageNumberNotaTerceiro}&data=${data}`, 'GET');
			}

		}

		// Parceiros
		if (resource === 'parceiro') {

			// get All Parceiros
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/Parceiros`, 'GET');
			}

			// get Parceiro
			if (operation === 'get') {
				const codigoParceiro = this.getNodeParameter('codigoParceiro', 0) as number;

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/Parceiros/${codigoParceiro}`, 'GET');

			}
		}

		// Pedido de Venda
		if (resource === 'pedidoVenda') {

			// Create Calendarização de Testes
			if (operation === 'create') {
				const jsonBody = JSON.parse(this.getNodeParameter('jsonBody', 0) as string);

				responseData = await apiRequest.call(this, `/vendas/movimentacoes/calendarizacao`, 'POST', jsonBody);
			}

			// get All Pedidos de Venda
			if (operation === 'getAll') {
				const pageNumberPedidoVenda = this.getNodeParameter('pageNumberPedidoVenda', 0) as number;
				var dataEmissaoInicial = '';
				var dataEmissaoFinal = '';
				var data = '';
				const parameters = this.getNodeParameter('parameters', 0) as IDataObject;
				if (parameters.dataEmissaoInicial) {
					dataEmissaoInicial = parameters.dataEmissaoInicial as string;
				}
				if (parameters.dataEmissaoFinal) {
					dataEmissaoFinal = parameters.dataEmissaoFinal as string;
				}
				if (parameters.data) {
					data = parameters.data as string;
				}

				responseData = await apiRequest.call(this, `/vendas/movimentacoes/pedidos?dataEmissaoInicial=${dataEmissaoInicial}&dataEmissaoFinal=${dataEmissaoFinal}&pageNumber=${pageNumberPedidoVenda}&dataSincronizacao=${data}`, 'GET');
			}

		}

		// Pessoa
		if (resource === 'pessoa') {

			// get All propriedades
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/pessoas`, 'GET');
			}
		}

		// Produto
		if (resource === 'produto') {

			// get All propriedades
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/produtos`, 'GET');
			}
		}

		// Propriedade
		if (resource === 'propriedade') {

			// get All propriedades
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/produtos`, 'GET');
			}
		}

		// Vendedor
		if (resource === 'vendedor') {

			// get All vendedores
			if (operation === 'getAll') {

				responseData = await apiRequest.call(this, `/transacionadores/cadastros/pessoas/vendedores`, 'GET');
			}
		}

		if (Array.isArray(responseData)) {
			returnData.push.apply(returnData, responseData as IDataObject[]);
		} else {
			returnData.push(responseData);
		}
		
		return [this.helpers.returnJsonArray(returnData)];

	}
}