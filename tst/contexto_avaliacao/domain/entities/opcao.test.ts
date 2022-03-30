import { Opcao } from "../../../../src/contexto_avaliacao/opcao";

describe('Entidade Opcao', () => {
    
    test('deve retornar o ID da opcao com sucesso',() => {
        //GIVEN
        const opcao = new Opcao('XXXXXXXXXXXXXXXXXXXXXXXXX',true)
        //WHEN
        const result_id = opcao.getId()
        //THEN
        expect(result_id).not.toBeNull()
    });

    test('deve retornar o enunciado da opcao com sucesso',() => {
        //GIVEN
        const opcao = new Opcao('XXXXXXXXXXXXXXXXXXXXXXXXX',true)
        //WHEN
        const result_descricao = opcao.getDescricao()
        //THEN
        expect(result_descricao).toBe('XXXXXXXXXXXXXXXXXXXXXXXXX')
    });

    test('deve retornar o valor da questao com sucesso',() => {
        //GIVEN
        const opcao = new Opcao('XXXXXXXXXXXXXXXXXXXXXXXXX',true)
        //WHEN
        const result_gabarito = opcao.getGabarito()
        //THEN
        expect(result_gabarito).toBeTruthy()
    });

});
