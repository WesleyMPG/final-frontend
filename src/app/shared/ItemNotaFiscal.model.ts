export interface ItemNotaFiscal {
    id_item_nota_fiscal: number;
    qtd: number;
    valor_unitario: number | string;
    produto_servico: string;
    vinculado: string | boolean;
    id_user_cad: number;
    dt_cad: string;
    id_user_alt?: number;
    dt_alt?: string;
    id_nota_fiscal: number;
}