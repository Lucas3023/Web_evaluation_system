import { v4 } from 'uuid'

export class Prova {
    private readonly _id: string
    private readonly _disciplina: string

    constructor(disciplina: string){
        this._id = v4()
        this._disciplina = disciplina
    }

    public getId = () => this._id
    public getDisciplina = () => this._disciplina
}