import { Console } from 'console'
import { Entidade } from '../../../utils/entidade'
import { Questao } from './questao'

export class Prova extends Entidade{
    //private readonly _id: string (vai herdar do arquivo entidade)
    private readonly _disciplina: string
    private readonly _tempo: number 
    private _questoes: Array<Questao> = []

    constructor(disciplina: string, tempo: number){
        super()
        //this._id = v4() (vai herdar do arquivo entidade)
        this._disciplina = disciplina
        this._tempo = tempo
    }

    //public getId = () => this._id (vai herdar do arquivo entidade)
    public getDisciplina = () => this._disciplina
    public getTempo = () => this._tempo


    public iniciar(){
        if (this.testeQuantidadeMinimadeQuestoes()) {
            throw new Error('Prova possui 0 questao')
        }
    }

    public addQuestao(questao:Questao){
        this._questoes.push(questao)
    }

    public deleteQuestao(questao:Questao) {
        this._questoes = this._questoes.filter(Q => Q.getId !== questao.getId)
    }

    public atualizarQuestaoProva (questao:Questao) {
        const questaoAtualizada = this._questoes.find(Q => Q.getId === questao.getId)
        questaoAtualizada.atualizar(questao.getEnunciado(), questao.getValor())
    }

    public getQuestao = (id: string) => this._questoes.find(Q => Q.getId() === id)

    public questoes = () => this._questoes

    private testeQuantidadeMinimadeQuestoes = () => this._questoes.length === 0
}
