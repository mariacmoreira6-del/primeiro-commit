import { Produtos } from "./Produtos.js"
export class Smartphone extends Produtos {
    private armazenamentoGB: number;

    constructor(
        codigodebarras:number,
        fabricante: string,
        preco: number,
        armazenamentoGB: number,
        
    ){
        super(codigodebarras, fabricante, preco)
        this.armazenamentoGB = armazenamentoGB; 
    }
    public get getArmazenamentoGB(): number {return this.armazenamentoGB; }

        set setArmazenamentoGB(novoArmazenamentoGB: number){
            if (novoArmazenamentoGB=== 0) {
                console.log("\n Erro: o campo não pode estar vazio")} 
                this.armazenamentoGB= novoArmazenamentoGB;
            }
        }
    