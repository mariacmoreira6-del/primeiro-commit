export class Itembiblioteca {
    private anoPublicacao: number;
    private titulo: string;

    constructor(
        anoPublicacao:number,
        titulo: string,
        
    ){
        this.anoPublicacao = anoPublicacao;
        this.titulo = titulo;
    }
    public get getAnoPublicacao (): number {return this.anoPublicacao; }
    public get getTitulo (): string {return this.titulo; }

    set setAnoPublicacao(novoAnoPublicacao: number){
        if(novoAnoPublicacao=== 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.anoPublicacao= novoAnoPublicacao;
        }
            set setTitulo(novoTitulo: string){
        if(novoTitulo.trim(). length === 0){
            console.log("\n Erro: O campo não pode estar vazio")}
            this.titulo= novoTitulo;
        }
    }
