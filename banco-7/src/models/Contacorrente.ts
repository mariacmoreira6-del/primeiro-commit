import { Conta } from "./Conta.js"
export class Contacorrente extends Conta {
    private limiteChequeespecial: number;

    constructor(
        agencia:number,
        titular: string,
        saldo: number,
        limiteChequeespecial: number,
        
    ){
        super(agencia, titular, saldo)
        this.limiteChequeespecial = limiteChequeespecial; 
    }
    public get getLimiteChequeespecial(): number {return this.limiteChequeespecial; }

        set setlimiteChequeespecial(novoLimiteChequeespecial: number){
            if (novoLimiteChequeespecial=== 0) {
                console.log("\n Erro: o campo não pode estar vazio")} 
                this.limiteChequeespecial= novoLimiteChequeespecial;
            }
        }
    