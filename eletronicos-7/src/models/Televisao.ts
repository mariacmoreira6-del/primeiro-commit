import { Produtos } from "./Produtos.js"
export class Televisao extends Produtos {
    private tamanhotelaempolegadas: number;

    constructor(
        codigodebarras:number,
        fabricante: string,
        preco: number,
        tamanhotelaempolegadas: number,
        
    ){
        super(codigodebarras, fabricante, preco)
        this.tamanhotelaempolegadas = tamanhotelaempolegadas; 
    }
    public get getTamanhotelaempolegadas(): number {return this.tamanhotelaempolegadas; }

        set setTamanhotelaempolegadas(novoTamanhotelaempolegadas: number){
            if (novoTamanhotelaempolegadas=== 0) {
                console.log("\n Erro: o campo não pode estar vazio")} 
                this.tamanhotelaempolegadas= novoTamanhotelaempolegadas;
            }
        }
    
