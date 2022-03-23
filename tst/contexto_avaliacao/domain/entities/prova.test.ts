import { Prova } from "../../../../src/contexto_avaliacao/domain/entities/prova";

describe('Entidade Prova', () => {
    test('deve retornar a prova com sucesso',() => {
        //GIVEN
        const prova = new Prova('Arquitetura e modelagem de Software')
        //WHEN
        const result = prova.getDisciplina()
        //THEN
        expect(result).toBe('Arquitetura e modelagem de Software')
    });
});