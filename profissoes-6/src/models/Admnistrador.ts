import { Funcionario } from "./Funcionario.js";
export class Administrador extends Funcionario {
    private cra: number;
    constructor (
        matricula: number,
        nome: string, 
        salario: number, 
        telefone: number,
        dataNascimento: number, 
        endereco: string,
        cra: number,
    ){
        super(matricula, nome, salario, telefone, dataNascimento, endereco);
        this.cra = cra;
    }
    get getCra(): number{ return this.cra; }
    set setCra(novaCra: number) {
        if (novaCra=== 0) {
            console.log("\n Erro:O campo não pode ser vazio!");
        }
        this.cra = novaCra;
    }
}
