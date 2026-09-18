export class Itembiblioteca {
    anoPublicacao;
    titulo;
    constructor(anoPublicacao, titulo) {
        this.anoPublicacao = anoPublicacao;
        this.titulo = titulo;
    }
    get getAnoPublicacao() { return this.anoPublicacao; }
    get getTitulo() { return this.titulo; }
    set setAnoPublicacao(novoAnoPublicacao) {
        if (novoAnoPublicacao === 0) {
            console.log("\n Erro: O campo não pode estar vazio");
        }
        this.anoPublicacao = novoAnoPublicacao;
    }
    set setTitulo(novoTitulo) {
        if (novoTitulo.trim().length === 0) {
            console.log("\n Erro: O campo não pode estar vazio");
        }
        this.titulo = novoTitulo;
    }
}
