import { Produtos } from "./Produtos.js"
export class Sorvete extends Produtos{
    private tempAdequada: number;

    constructor(
    id: number,
    nome: string,
    preco: number,
    tempAdequada: number
    ){
        super(id, nome, preco);
        this.tempAdequada = tempAdequada;
    }
    public get getTempAdequada (): number{return this.tempAdequada; }
   public set setTempAdequada(novaTempAdequada: number){
   if (novaTempAdequada === 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.tempAdequada= novaTempAdequada;
    }
}