export class PessoaFisica{
    private cpf: string;
    private nome: string;
    private telefone: string;
    private email: string;
    private dataNascimento: string;

    constructor(
    cpf: string,
    nome: string,
    telefone: string,
    email: string,
    dataNascimento: string,

    ){
        this.cpf = cpf;
        this.nome = nome ;
        this.telefone= telefone;
        this.email= email;
        this.dataNascimento= dataNascimento;
    }
    public get getCpf (): string{return this.cpf; }
    public get getNome (): string{return this.nome; }
    public get getTelefone (): string{return this.telefone; }
    public get getEmail(): string{return this.email; }
    public get getDataNascimento (): string{return this.dataNascimento; }

     set setCpf (novoCpf: string){
        if(novoCpf.trim(),length === 0){
            console.log("\n Erro:O cpf não pode ser vazio!")
        }
        this.nome= novoCpf;
    }
    set setNome (novoNome: string){
        if(novoNome.trim(),length === 0){
            console.log("\n Erro:O nome não pode ser vazio!")
        }
        this.nome= novoNome;
    }
     set setTelefone (novoTelefone: string){
        if(novoTelefone.trim(),length === 0){
            console.log("\n Erro:O telefone não pode ser vazio!")
        }
        this.telefone= novoTelefone;
    }
     set setEmail (novoEmail: string){
        if(novoEmail.trim(),length === 0){
            console.log("\n Erro:O Email não pode ser vazio!")
        }
        this.email= novoEmail;
    }
     set setDataNascimento (novoDataNascimento: string){
        if(novoDataNascimento.trim(),length === 0){
            console.log("\n Erro:O DataNascimento não pode ser vazio!")
        }
        this.dataNascimento= novoDataNascimento;
    }
    
}