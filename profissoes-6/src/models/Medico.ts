import { Funcionario } from "./Funcionario.js";
export class Medico extends Funcionario {
    private crm: number;
    constructor (
        matricula: number,
        nome: string, 
        salario: number, 
        telefone: number,
        dataNascimento: number, 
        endereco: string,
        crm: number,
    ){
        super(matricula, nome, salario, telefone, dataNascimento, endereco);
        this.crm = crm;
    }
    get getcrm(): number{ return this.crm; }
    set setcrm(novaCrm: number) {
        if (novaCrm=== 0) {
            console.log("\n Erro:O campo não pode ser vazio!");
        }
        this.crm = novaCrm;
    }
}