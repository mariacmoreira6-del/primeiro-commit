import { Funcionario } from "./Funcionario.js"
export class Gerente extends Funcionario{
private bonusAtual: number;

constructor(
    nome:string,
    matricula: number,
    salario: number,
    bonusAtual: number,
){
    super(nome, matricula, salario);
    this.bonusAtual= bonusAtual;}

public get getBonutAtual(): number{return this.bonusAtual;}

public set setBonusAutor(novoBonusAtual: number){
    if(novoBonusAtual===0){
        console.log("\n Erro:O campo não pode ser vazio!")
    } 
    this.bonusAtual= novoBonusAtual;}
}