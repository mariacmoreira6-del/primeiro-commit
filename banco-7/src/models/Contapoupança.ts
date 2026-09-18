import { Conta } from "./Conta.js"
export class Contapoupança extends Conta {
    private taxarendimentomensal: number;

    constructor(
        agencia:number,
        titular: string,
        saldo: number,
        taxarendimentomensal: number,
        
    ){
        super(agencia, titular, saldo)
        this.taxarendimentomensal = taxarendimentomensal; 
    }
    public get getTaxarendimentomensal(): number {return this.taxarendimentomensal; }

        set setTaxarendimentomensal(novoTaxarendimentomensal: number){
            if (novoTaxarendimentomensal=== 0) {
                console.log("\n Erro: o campo não pode estar vazio")} 
                this.taxarendimentomensal= novoTaxarendimentomensal;
            }
        }