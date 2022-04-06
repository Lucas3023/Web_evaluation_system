import { copyFileSync } from "fs";
import { Prova } from "../../../../src/contexto_avaliacao/domain/entities/prova";
import { QuestaoDiscursiva } from "../../../../src/contexto_avaliacao/domain/entities/questao-discursiva";

describe('Entidade Prova', () => {
    
    test('deve retornar o ID da prova com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        //WHEN
        const result_id = prova.getId()
        //THEN
        expect(result_id).not.toBeNull()
    });

    test('deve retornar a disciplina da prova com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        //WHEN
        const result_disciplina = prova.getDisciplina()
        //THEN
        expect(result_disciplina).toBe('Arquitetura e modelagem de Software')
    });

    test('deve retornar o tempo da prova com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        //WHEN
        const result_tempo = prova.getTempo()
        //THEN
        expect(result_tempo).toBe(10)
    });

    test('deve lançar uma exeção caso a prova tenha 0 questão',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        //WHEN
        const iniciar = () => prova.iniciar()
        //THEN
        expect(iniciar).toThrowError()
    });

    test('deve iniciar uma prova com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        const nova_questao = new QuestaoDiscursiva('O que é DDD',3)
        prova.addQuestao(nova_questao)
        //WHEN
        const iniciar = () => prova.iniciar()
        //THEN
        expect(iniciar).not.toThrowError()
    });

    test('deve excluir uma questao com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        const nova_questao = new QuestaoDiscursiva('O que é DDD',3)
        const nova_questao2 = new QuestaoDiscursiva('O DDD é 1 milhao',10)
        prova.addQuestao(nova_questao)
        prova.addQuestao(nova_questao2)
        //WHEN
        const iniciar = () => prova.iniciar()
        prova.deleteQuestao(nova_questao)
        prova.deleteQuestao(nova_questao2)
        //THEN
        expect(prova.questoes.length).toBe(0)
    });

    test('deve alterar uma questao com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software',10)
        const nova_questao = new QuestaoDiscursiva('O que é DDD',3)
        prova.addQuestao(nova_questao)

        nova_questao.atualizar('teste', 99)

        //const questao = prova.getQuestao(nova_questao.getId())

        //WHEN
        prova.atualizarQuestaoProva(nova_questao)

        //THEN
        expect(prova.questoes()[0].getEnunciado()).toBe('teste')
        expect(prova.questoes()[0].getValor()).toBe(99)
    });
 
});