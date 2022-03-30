import { v4 } from 'uuid'

export class Entidade {
    private readonly _id: string

    constructor(){

        this._id = v4()

    }

    public getId = () => this._id

}