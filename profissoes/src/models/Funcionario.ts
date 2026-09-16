import { Profissoes } from "./Profissoes.js"
export class Funcionario extends Profissoes{
    private matricula: number;
    private nome: string;
    private salario: number;
    private nome: string;

    constructor(
    marca: string,
    modelo: string,
    ano: number,
    cor: string,
    numeroPortas: number,
    motor : string
    ){
        super(marca, modelo, ano, cor);
        this.numeroPortas = numeroPortas;
        this.motor = motor;
    }
    public get getNumeroPortas (): number{return this.numeroPortas; }
            public get getMotor (): string{return this.motor;}

   public set setNumeroPortas(novaNumeroPortas: number){
   if (novaNumeroPortas=== 0) 
    {     console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.numeroPortas= novaNumeroPortas;
    }
    public set setMotor(novaMotor: string){
   if (novaMotor.trim().length === 0) {   
      console.log("\n Erro:O campo não pode ser vazio!")
        }
        this.motor= novaMotor;
    }
}