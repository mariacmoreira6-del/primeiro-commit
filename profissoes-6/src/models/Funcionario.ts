
export class Funcionario{
    private matricula: number;
    private nome: string;
    private salario: number;
    private telefone: number;
    private dataNascimento: number;
    private endereco: string;

    constructor(
    matricula: number,
    nome: string,
    salario: number,
    telefone: number,
    dataNascimento: number,
    endereco: string,
    
    ){
    this.matricula= matricula;
    this.nome= nome;
    this.salario= salario;
    this.telefone= telefone;
    this.dataNascimento= dataNascimento;
    this.endereco= endereco;
    }
    public get getMatricula (): number {return this.matricula; }
    public get getNome (): string {return this.nome; }
    public get getSalario (): number {return this.salario; }
    public get getTelefone(): number {return this.telefone; }
    public get getDataNascimento (): number {return this.dataNascimento; }
    public get getEndereco (): string {return this.endereco; }
    

    set setMatricula(novoMatricula: number){
        if(novoMatricula=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.matricula= novoMatricula;
        }
            set setNome(novoNome: string){
        if(novoNome.trim(). length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.nome= novoNome;
        }
        set setSalario(novoSalario: number){
        if(novoSalario === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.salario= novoSalario;
        }
        set setTelefone(novoTelefone: number){
        if(novoTelefone === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.telefone= novoTelefone;
        }
        set setDataNascimento(novoDataNascimento: number){
        if(novoDataNascimento === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.dataNascimento= novoDataNascimento;
        }
        set setEndereco(novoEndereco: string){
        if(novoEndereco.trim(). length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.endereco= novoEndereco;
        }
    }
