import { Itembiblioteca } from "./Itembiblioteca.js"
export class Revista extends Itembiblioteca{
     private edicao: number;

    constructor(
    anoPublicacao: number,
    titulo: string,
    edicao: number,
    ){
        super(anoPublicacao, titulo);
        this.edicao = edicao;}

    public get getEdicao (): number{return this.edicao; }
        public set setedicao(novoEdicao: number){
   if (novoEdicao === 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.edicao= novoEdicao;}  
}