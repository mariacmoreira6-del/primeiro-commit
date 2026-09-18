export class Funcionario {
    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(
        nome:string,
        matricula: number,
        salario: number,
        
    ){
        this.nome = nome;
        this.matricula= matricula;
        this.salario = salario;
    }
    public get getNome (): string {return this.nome; }
    public get getMatricula (): number {return this.matricula; }
    public get getSalario (): number {return this.salario; }

    set setNome(novoNome: string){
        if(novoNome.trim().length=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.nome= novoNome;
        }
            set setMatricula(novoMatricula: number){
        if(novoMatricula=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.matricula= novoMatricula;
        }
        set setSalario(novoSalario: number){
        if(novoSalario === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.salario= novoSalario;
        }
    }