import { PessoaFisica } from "./PessoaFisica.js";
export class Funcionario extends PessoaFisica{
    private pis: string;
    private registro: string;
    private carteiradeTrabalho:string;

    constructor(
    cpf: string,
    nome: string,
    telefone: string,
    email: string,
    dataNascimento: string,
    clienteDesde: string,
    pis: string,
    registro: string,
    carteiradeTrabalho:string){
        super(cpf, nome, telefone, email, dataNascimento);
        this.pis = pis;
        this.registro= registro;
        this.carteiradeTrabalho= carteiradeTrabalho;
    }
    public get getPis (): string{return this.pis; }
    public get getRegistro (): string{return this.registro; }
    public get getCarteiradeTrabalho (): string{return this.carteiradeTrabalho; }

   public set setPis(novaPis: string){
   if (novaPis.trim().length === 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.pis= novaPis;
    }
     public set setRegistro(novaRegistro: string){
   if (novaRegistro.trim().length === 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.registro= novaRegistro;
    }
     public set setCarteiradeTrabalho(novaCarteiradeTrabalho: string){
   if (novaCarteiradeTrabalho.trim().length === 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.carteiradeTrabalho= novaCarteiradeTrabalho;
    }
}