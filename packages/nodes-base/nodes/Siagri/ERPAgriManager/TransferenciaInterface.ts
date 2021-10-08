
export interface ITransferencia {	
    empresa: string;
	data: string;
	numero: string;
	observacao: string;
	unidadeArmazenamentoOrigem: string;
	unidadeArmazenamentoDestino: string;
    itensTransferencia: [{
	    produto: string;
	    quantidade: string;
    }];
	usuario: string;
} 
