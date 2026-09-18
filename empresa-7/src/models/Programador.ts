import { Funcionario } from "./Funcionario.js"
export class Programador extends Funcionario{
private linguagemPrincipal: string;

constructor(
    nome:string,
    matricula: number,
    salario: number,
    linguagemPrincipal: string,
){
    super(nome, matricula, salario);
    this.linguagemPrincipal= linguagemPrincipal;}

public get getLinguagemPrincipal(): string{return this.linguagemPrincipal;}

public set setBonusAutor(novoLinguagemPrincipal: string){
    if(novoLinguagemPrincipal.trim().length===0){
        console.log("\n Erro:O campo não pode ser vazio!")
    } 
    this.linguagemPrincipal= novoLinguagemPrincipal;}
}