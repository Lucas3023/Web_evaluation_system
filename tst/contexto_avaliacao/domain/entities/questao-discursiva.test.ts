import { Questao } from "../../../../src/contexto_avaliacao/domain/entities/questao";
import { QuestaoDiscursiva } from "../../../../src/contexto_avaliacao/domain/entities/questao-discursiva";

describe('Entidade Questao', () => {
    
    test('deve retornar o ID da questao com sucesso',() => {
        //GIVEN
        const questao = new QuestaoDiscursiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        //WHEN
        const result_id = questao.getId()
        //THEN
        expect(result_id).not.toBeNull()
    });

    test('deve retornar o enunciado da questao com sucesso',() => {
        //GIVEN
        const questao = new QuestaoDiscursiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        //WHEN
        const result_enunciado = questao.getEnunciado()
        //THEN
        expect(result_enunciado).toBe('XXXXXXXXXXXXXXXXXXXXXXXXX')
    });

    test('deve retornar o valor da questao com sucesso',() => {
        //GIVEN
        const questao = new QuestaoDiscursiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        //WHEN
        const result_valor = questao.getValor()
        //THEN
        expect(result_valor).toBe(5)
    });

});