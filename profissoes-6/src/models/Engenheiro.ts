import { Funcionario } from "./Funcionario.js";
export class Engenheiro extends Funcionario {
    private numCrea: number;
    constructor (
        matricula: number,
        nome: string, 
        salario: number, 
        telefone: number,
        dataNascimento: number, 
        endereco: string,
        numCrea: number,
    ){
        super(matricula, nome, salario, telefone, dataNascimento, endereco);
        this.numCrea = numCrea;
    }
    get getNumCrea(): number{ return this.numCrea; }
    set setNumCrea(novaNumCrea: number) {
        if (novaNumCrea=== 0) {
            console.log("\n Erro:O campo não pode ser vazio!");
        }
        this.numCrea = novaNumCrea;
    }
}