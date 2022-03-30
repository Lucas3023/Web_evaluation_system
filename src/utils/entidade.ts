import { v4 } from 'uuid'

export abstract class Entidade {
    private readonly _id: string

    constructor(){

        this._id = v4()

    }

    public getId = () => this._id

}