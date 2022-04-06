
import { Questao } from './questao'
import { Opcao } from './opcao'

export class QuestaoObjetiva extends Questao{

    private _opcao: Array<Opcao> = []

    constructor(enunciado: string, valor: number){
        
        super(enunciado,valor)
        
        //herdou tudo de questao
        
    }

    public getOpcao = () => this._opcao
    public opcao = () => this._opcao

    public adicionarOpcao(opcao: Opcao){
        
        const verificarGabarito =  this._opcao.find( Q => Q.getGabarito() === true)
        //console.log(verificarGabarito)
        if((verificarGabarito !== undefined) && (opcao.getGabarito())){
            throw new Error('Questao já possui um gabarito')
        }
        this._opcao.push(opcao)

    }

    //herdou tudo de questao
   
}