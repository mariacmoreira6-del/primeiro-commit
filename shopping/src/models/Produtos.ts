export class Produtos{
    private id: number;
    private nome: string;
    private preco: number;

    constructor(
        id:number,
        nome: string,
        preco: number,
    ){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    public get getId (): number {return this.id; }
    public get getNome (): string {return this.nome; }
    public get getPreco (): number {return this.preco; }

    set setId(novoId: number){
        if(novoId=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.id= novoId;
        }
            set setnome(novoNome: string){
        if(novoNome.trim(). length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.nome= novoNome;
        }
            set setPreco(novoPreco: number){
        if(novoPreco=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.preco= novoPreco;
        }
    }
