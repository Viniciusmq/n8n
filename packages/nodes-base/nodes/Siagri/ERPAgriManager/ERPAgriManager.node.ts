import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';
import { apiRequest } from './GenericFunction';

import {
	abastecimentoOperations,
	abastecimentoFields,
} from './abastecimentoDescription';

import {
	atividadeOperations,
} from './AtividadeDescription';

import {
	bemOperations,
} from './BemDescription';

import {
	bombaOperations,
} from './BombaDescription';

import {
	inventarioOperations,
	inventarioFields,
} from './InventarioDescription';

import {
	movimentoEstoqueOperations,
} from './MovimentoEstoqueDescription';

import {
	unidadeArmazenamentoOperations,
} from './UnidadeArmazenamentoDescription';

import {
	usuarioOperations,
} from './UsuarioDescription';

import {
	produtoOperations,
	produtoFields,
} from './ProdutoDescription';

import {
	IAbastecimento,
} from './AbastecimentoInterface';

import {
	IInventario
} from './InventarioInterface';

import {
	ITransferencia
} from './TransferenciaInterface';
import{
	retornoApiFields,
	retornoApiOperation,
}from './RetornoApiDescription';

import {
	transferenciaOperations,
	transferenciaFields,
} from './TransferenciaDescription';

import {
	protocoloOperations,
	protocoloFields,
} from './ProtocoloDescription';

export class ERPAgriManager implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'ERPAgriManager',
        name: 'ERPAgriManager',
        icon: 'file:ERPAgriManager.svg',
        group: ['transform'],
        version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'SIAGRI ERP AgriManager API',
        defaults: {
            name: 'ERPAgriManager',
            color: '#1A82e2',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
			{
				name: 'ERPAgriManagerApi',
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
						name: 'Abastecimento',
						value: 'abastecimento',
					},
					{
						name: 'Atividade',
						value: 'atividade',
					},					
					{
						name: 'Bem',
						value: 'bem',
					},
					{
						name: 'Bomba',
						value: 'bomba',
					},
					{
						name: 'Inventário',
						value: 'inventario',
					},					
					{
						name: 'Produto',
						value: 'produto',
					},
					{
						name: 'Protocolo',
						value: 'protocolo',
					},
					{
						name: 'Retorno Api',
						value: 'retornoApi',
					},
					{
						name: "Transferência",
						value: "transferencia"
					},
					{
						name: 'Unidade Armazenamento',
						value: 'unidadeArmazenamento',
					},
					{
						name: 'Usuário',
						value: 'usuario',
					},
				],
				default: 'Atividade',
				required: true,
				description: 'Resource to consume',
			},

			...abastecimentoOperations,
			...abastecimentoFields,
			...atividadeOperations,
			...bemOperations,
			...bombaOperations,
			...inventarioOperations,
			...inventarioFields,					
			...protocoloOperations,
			...protocoloFields,
			...produtoOperations,
			...produtoFields,
			...transferenciaOperations,
			...transferenciaFields,
			...retornoApiOperation,
			...retornoApiFields,
			...unidadeArmazenamentoOperations,
			...usuarioOperations,
		],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const length = items.length as unknown as number;
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const returnData: IDataObject[] = [];
		let responseData;
		
		for (let i = 0; i < length; i++) {
			// Atividades
			if (resource === 'atividade') {
				
				// get All atividades
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/producaoagricola/cadastros/aplicacoes/atividades`, 'GET');
				}
			}	

			// Abastecimento
			if (resource === 'abastecimento') {
				
				// Create abastecimento
				if (operation === 'create') {

					const empresa = this.getNodeParameter('empresa', i) as string;
					const numero = this.getNodeParameter('numero', i) as	string;
					const data = this.getNodeParameter('data', i) as string;
					const destino = this.getNodeParameter('maquinaDestino', i) as string;
					const unidadeArmazenamento = this.getNodeParameter('unidadeArmazenamento', i) as string;
					const kmHorimetro = this.getNodeParameter('kmHorimetro', i) as string;
					const observacao = this.getNodeParameter('observacao', i) as string;
					const atividade = this.getNodeParameter('atividade', i) as string;
					const operacao = this.getNodeParameter('operacao', i) as string;
					const bombaCombustivel = this.getNodeParameter('bomba', i) as string;
					const registradoraInicial = this.getNodeParameter('registradoraInicial', i) as string;
					const registradoraFinal = this.getNodeParameter('registradoraFinal', i) as string;
					const produto = this.getNodeParameter('produto', i) as string;
					const quantidade = this.getNodeParameter('quantidade', i) as string;
					const usuario = this.getNodeParameter('usuario', i) as string;

					const body: IAbastecimento = {
						empresa: empresa,
						numero: numero,
						data: data,
						destino: destino,
						unidadeArmazenamento: unidadeArmazenamento,
						kmHorimetro: kmHorimetro,
						observacao: observacao,
						atividade: atividade,
						operacao: operacao,
						bombaCombustivel: bombaCombustivel,
						registradoraInicial: registradoraInicial,
						registradoraFinal: registradoraFinal,
						produto: produto,
						quantidade: quantidade,
						usuario: usuario,
					};

					responseData = await apiRequest.call(this, `/producaoagricola/cadastros/aplicacoes/bombascombustivel`, 'POST', body);
				}
			}

			// Bens
			if (resource === 'bem') {
				
				// get All bens
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/producaoagricola/cadastros/aplicacoes/bens`, 'GET');
				}
			}	

			// Bombas
			if (resource === 'bomba') {
				
				// get All bombas
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/producaoagricola/cadastros/aplicacoes/bombascombustivel`, 'GET');
				}
			}
			
			// Inventario
			if (resource === 'inventario') {
				
				// Create inventario
				if (operation === 'create') {

					const empresa = this.getNodeParameter('empresa', i) as string;
					const data = this.getNodeParameter('data', i) as string;
					const unidadeArmazenamento = this.getNodeParameter('unidadeArmazenamento', i) as string;
					const observacaoContagem1 = this.getNodeParameter('observacao', i) as string;
					const operacaoEntrada = this.getNodeParameter('operacaoEntrada', i) as string;
					const operacaoSaida = this.getNodeParameter('operacaoSaida', i) as string;					
					const responsavel = this.getNodeParameter('responsavel', i) as string;
					const tipoAjuste = this.getNodeParameter('tipoAjuste', i) as string;					
					const material = this.getNodeParameter('material', i) as string;
					const quantidade1 = this.getNodeParameter('quantidade', i) as string;
					const idExterno = this.getNodeParameter('idExterno', i) as string;

					const body: IInventario = {
						empresa: empresa,
						data: data,
						unidadeArmazenamento: unidadeArmazenamento,						
						operacaoEntrada: operacaoEntrada,
						operacaoSaida: operacaoSaida,
						responsavel: responsavel,
						tipoAjuste: tipoAjuste,
						idExterno: idExterno,
						itensInventario: [{
							material: material,
							quantidade1: quantidade1,
							observacaoContagem1: observacaoContagem1,
							quantidade2: quantidade1,
							observacaoContagem2: observacaoContagem1,
						}],
					};

					responseData = await apiRequest.call(this, `/producaoagricola/cadastros/aplicacoes/inventarios`, 'POST', body);
				}
			}

			// Protocolo
			if (resource === 'protocolo') {
								
				const pageNumber = this.getNodeParameter('pageNumberProtocolo', i) as string;

				// get All Protocolo
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/producaoagricola/movimentacoes/entradasprotocolo${pageNumber}`, 'GET');
				}

				// get Protocolo
				if (operation === 'get') {
					
					let dataEmissaoInicial = '';
					let dataEmissaoFinal = '';
					let empresa = '';
					let unidadeArmazenamento = '';
					let movimentaEstoque = '';
					let numero = '0';
					let produto = '';
					let dataSincronizacao = '';

					const parameters = this.getNodeParameter('parameters', i) as IDataObject;

					if (parameters.dataEmissaoInicial) {
						dataEmissaoInicial = parameters.dataEmissaoInicial as string;
					}
					if (parameters.dataEmissaoFinal) {
						dataEmissaoFinal = parameters.dataEmissaoFinal as string;
					}
					if (parameters.empresa) {
						empresa = parameters.empresa as string;
					}
					if (parameters.unidadeArmazenamento) {
						unidadeArmazenamento = parameters.unidadeArmazenamento as string;
					}
					if (parameters.movimentaEstoque) {
						movimentaEstoque = parameters.movimentaEstoque as string;
					}
					if (parameters.numero) {
						numero = parameters.numero as string;
					}
					if (parameters.produto) {
						produto = parameters.produto as string;
					}
					if (parameters.dataSincronizacao) {
						dataSincronizacao = parameters.dataSincronizacao as string;
					}
					responseData = await apiRequest.call(this, `/producaoagricola/movimentacoes/entradasprotocolo?pageNumber=${pageNumber}&dataEmissaoInicial=${dataEmissaoInicial}&dataEmissaoFinal=${dataEmissaoFinal}&empresas=${empresa}&unidadeArmazenamento=${unidadeArmazenamento}&movimentaEstoque=${movimentaEstoque}&numero=${numero}&produto=${produto}&dataSincronizacao=${dataSincronizacao}`, 'GET');
				}
			}

			// Produtos
			if (resource === 'produto') {
				
				// get All produtos
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/administrativo/cadastros/produtos`, 'GET');
				}

				// get produto
				if (operation === 'get') {
					
					const codigoProduto = this.getNodeParameter('codigoProduto', i) as number;			
					responseData = await apiRequest.call(this, `/administrativo/cadastros/produtos/${codigoProduto}`, 'GET');					
				}
			}

			// Transferência
			if (resource === 'transferencia') {
				
				// Create transferência
				if (operation === 'create') {

					const empresa = this.getNodeParameter('empresa', i) as string;
					const data = this.getNodeParameter('data', i) as string;
					const numero = this.getNodeParameter('numero', i) as string;
					const observacao = this.getNodeParameter('observacao', i) as string;					
					const unidadeArmazenamentoOrigem = this.getNodeParameter('unidadeArmazenamentoOrigem', i) as string;
					const unidadeArmazenamentoDestino = this.getNodeParameter('unidadeArmazenamentoDestino', i) as string;
					const produto = this.getNodeParameter('produto', i) as string;
					const quantidade = this.getNodeParameter('quantidade', i) as string;
					const usuario = this.getNodeParameter('usuario', i) as string;

					const body: ITransferencia = {
						empresa: empresa,
						data: data,
						numero: numero,
						observacao: observacao,						
						unidadeArmazenamentoOrigem: unidadeArmazenamentoOrigem,
						unidadeArmazenamentoDestino: unidadeArmazenamentoDestino,
						itensTransferencia: [{
							produto: produto,
							quantidade: quantidade,
						}],
						usuario: usuario,
					};

					responseData = await apiRequest.call(this, `/producaoagricola/movimentacoes/transferencia`, 'POST', body);
				}
			}
			//Retorno Api
			if(resource == 'retornoApi'){
				if (operation === 'get') {
					const correlationToken =  this.getNodeParameter('correlationToken', i) as string;
					//console.log(correlationToken);
					responseData = await apiRequest.call(this, `/transacoes/${correlationToken}`, 'GET');
					//console.log(responseData);
				}
			}
			// Unidade Armazenamento
			if (resource === 'unidadeArmazenamento') {
				
				// get All Unidade Armazenamento
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/administrativo/cadastros/unidadesarmazenagem`, 'GET');
				}
			}

			// Usuário
			if (resource === 'usuario') {
				
				// get All Usuario
				if (operation === 'getAll') {

					responseData = await apiRequest.call(this, `/administrativo/cadastros/pessoas/usuarios`, 'GET');
				}
			}

			if (Array.isArray(responseData)) {
				returnData.push.apply(returnData, responseData as IDataObject[]);
			} else {
				returnData.push(responseData);
			}
			
		}

		return [this.helpers.returnJsonArray(returnData)];
	}

}

