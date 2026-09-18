export class Conta {
    private agencia: number;
    private titular: string;
    private saldo: number;

    constructor(
        agencia:number,
        titular: string,
        saldo: number,
        
    ){
        this.agencia = agencia;
        this.titular = titular;
        this.saldo = saldo; 
    }
    public get getAgencia (): number {return this.agencia; }
    public get getTitular (): string {return this.titular; }
    public get getSaldo (): number {return this.saldo; }

    set setAgencia(novoAgencia: number){
        if(novoAgencia=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.agencia= novoAgencia;
        }
            set setTitular(novoTitular: string){
        if(novoTitular.trim(). length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.titular= novoTitular;
        }
        set setSaldo(novoSaldo: number){
            if (novoSaldo=== 0) {
                console.log("\n Erro: o campo não pode estar vazio")} 
                this.saldo= novoSaldo;
            }
        }
    
