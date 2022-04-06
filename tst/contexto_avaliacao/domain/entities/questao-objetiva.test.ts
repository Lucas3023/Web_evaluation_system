import { Opcao } from "../../../../src/contexto_avaliacao/domain/entities/opcao";
import { QuestaoObjetiva } from "../../../../src/contexto_avaliacao/domain/entities/questao-objetiva";

describe('Entidade QuestaoObjetiva', () => {
    
    test('deve retornar o ID da questao com sucesso',() => {
        //GIVEN
        const questao_objetiva = new QuestaoObjetiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        //WHEN
        const result_id = questao_objetiva.getId()
        //THEN
        expect(result_id).not.toBeNull()
    });

    test('deve retornar o enunciado da questao com sucesso',() => {
        //GIVEN
        const questao_objetiva = new QuestaoObjetiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        //WHEN
        const result_enunciado = questao_objetiva.getEnunciado()
        //THEN
        expect(result_enunciado).toBe('XXXXXXXXXXXXXXXXXXXXXXXXX')
    });

    test('deve retornar o valor da questao com sucesso',() => {
        //GIVEN
        const questao_objetiva = new QuestaoObjetiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        //WHEN
        const result_valor = questao_objetiva.getValor()
        //THEN
        expect(result_valor).toBe(5)
    });

    test('deve retornar a opcao da questao objetiva',() => {
        //GIVEN
        const questao_objetiva = new QuestaoObjetiva('XXXXXXXXXXXXXXXXXXXXXXXXX',5)
        const nova_opcaoA = new Opcao('DDD',true)
        
        //WHEN
        questao_objetiva.adicionarOpcao(nova_opcaoA)
        //THEN
        expect (questao_objetiva.opcao()[0].getDescricao()).toBe('DDD')
        console.log(questao_objetiva.opcao()[0].getGabarito())
        expect (questao_objetiva.opcao()[0].getGabarito()).toBe(true)
        
        
    });

});