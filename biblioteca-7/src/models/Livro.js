import { Itembiblioteca } from "./Itembiblioteca.js";
export class Livro extends Itembiblioteca {
    autor;
    numeroPaginas;
    constructor(anoPublicacao, titulo, autor, numeroPaginas) {
        super(anoPublicacao, titulo);
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    get getAutor() { return this.autor; }
    get getNumeroPaginas() { return this.numeroPaginas; }
    set setAutor(novaAutor) {
        if (novaAutor.trim().length === 0) {
            console.log("\n Erro:O campo não pode ser vazio!");
        }
        this.autor = novaAutor;
    }
    set setNumeroPaginas(novoNumeroPaginas) {
        if (novoNumeroPaginas === 0) {
            console.log("\n Erro:O campo não pode ser vazio!");
        }
        this.numeroPaginas = novoNumeroPaginas;
    }
}
