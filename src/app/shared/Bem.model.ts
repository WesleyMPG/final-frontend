export interface Bem {
    id_bem?: number,
    id_item_nota_fiscal: number,
    tombamento: string,
    id_estado_bem: number,
    id_situacao_uso_bem: number,
    valor_aquisicao: number|string,
    id_marca: number,
    data_lim_garantia: string,
    data_fim_garantia: string,
    data_inicio_uso?: string,
    observacoes?: string,
    id_user_cad?: number,
    dt_cad?: string,
    id_user_alt?: number,
    dt_alt?: string,
}