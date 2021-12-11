import { NotaFiscal } from './NotaFiscal.model';

export interface Fornecedor{
    id_fornecedor: number;
    razao_social: string;
    cnpj: string;
    email: string;
    telefone: string;
    id_user_cad: number;
    dt_cad: string;
    id_user_alt?: number;
    dt_alt?: string;
    notas_fiscais?: NotaFiscal[]
}