import { Produtos } from "./Produtos.js"
export class Camisa extends Produtos{
    private cor: string;
     private tecido: string;
      private tamanho: string;

    constructor(
    id: number,
    nome: string,
    preco: number,
    cor: string,
    tecido: string,
    tamanho: string,
    ){
        super(id, nome, preco);
        this.cor = cor;
        this.tecido = tecido;
         this.tamanho = tamanho;}

    public get getCor (): string{return this.cor; }
    public get getTecido (): string{return this.tecido; }
    public get getTamanho (): string{return this.tamanho; }

   public set setCor(novaCor: string){
   if (novaCor.trim().length=== 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.cor= novaCor;}
        public set setTecido(novoTecido: string){
   if (novoTecido.trim().length=== 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.tecido= novoTecido;}
        public set setTamanho(novoTamanho: string){
   if (novoTamanho.trim().length=== 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.tamanho= novoTamanho;
    }
}