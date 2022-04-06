import { Entidade } from '../../../utils/entidade'

export abstract class Questao extends Entidade{
    //private readonly _id: string (vai herdar do arquivo entidade)
    private  _enunciado: string
    private  _valor: number 

    constructor(enunciado: string, valor: number){
        super()
        //this._id = v4() (vai herdar do arquivo entidade)
        this._enunciado = enunciado
        this._valor = valor
    }

    //public getId = () => this._id (vai herdar do arquivo entidade)
    public getEnunciado = () => this._enunciado
    public getValor = () => this._valor

    //public setEnunciado = (enunciado: string) => this._enunciado = enunciado
    //public setValor = (valor: number) => this._valor = valor

    public atualizar(enunciado: string, valor: number){
        this._enunciado = enunciado;
        this._valor = valor
    }
}