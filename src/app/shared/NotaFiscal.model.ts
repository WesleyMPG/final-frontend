export interface NotaFiscal {
    id_nota_fiscal: number;
    numero: number;
    ano: number;
    id_user_cad: number;
    dt_cad: string;
    id_user_alt?: number;
    dt_alt?: string;
    id_fornecedor: number;
    id_natureza_despesa: number;
}