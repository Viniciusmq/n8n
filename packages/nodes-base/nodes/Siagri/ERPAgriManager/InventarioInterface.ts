
export interface IInventario {	
    empresa: string;
    data: string;
    unidadeArmazenamento: string;
    operacaoEntrada: string;
	operacaoSaida: string;
    responsavel: string;
    tipoAjuste: string;
    idExterno: string;
    itensInventario: [{
        material: string;
        quantidade1: string;
        observacaoContagem1: string;
        quantidade2: string;
        observacaoContagem2: string;
    }];
} 
