import { Entidade } from "../utils/entidade"

export class Opcao extends Entidade{
    //private readonly _id: string (vai herdar do arquivo entidade)
    private readonly _descricao: string
    private readonly _gabarito: boolean 

    constructor(descricao: string, gabarito: boolean){
        super()
        //this._id = v4() (vai herdar do arquivo entidade)
        this._descricao = descricao
        this._gabarito = gabarito
    }

    //public getId = () => this._id (vai herdar do arquivo entidade)
    public getDescricao = () => this._descricao
    public getGabarito = () => this._gabarito
}