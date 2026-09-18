import { Itembiblioteca } from "./Itembiblioteca.js"
export class Livro extends Itembiblioteca{
    private autor: string;
     private numeroPaginas: number;

    constructor(
    anoPublicacao: number,
    titulo: string,
    autor: string,
    numeroPaginas: number,
    ){
        super(anoPublicacao, titulo);
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;}

    public get getAutor (): string{return this.autor; }
    public get getNumeroPaginas (): number{return this.numeroPaginas; }

   public set setAutor(novaAutor: string){
   if (novaAutor.trim().length=== 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.autor= novaAutor;}
        public set setNumeroPaginas(novoNumeroPaginas: number){
   if (novoNumeroPaginas === 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.numeroPaginas= novoNumeroPaginas;}  
}