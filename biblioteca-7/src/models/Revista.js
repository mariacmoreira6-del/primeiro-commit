import { Itembiblioteca } from "./Itembiblioteca.js";
export class Revista extends Itembiblioteca {
    edicao;
    constructor(anoPublicacao, titulo, edicao) {
        super(anoPublicacao, titulo);
        this.edicao = edicao;
    }
    get getEdicao() { return this.edicao; }
    set setedicao(novoEdicao) {
        if (novoEdicao === 0) {
            console.log("\n Erro:O campo não pode ser vazio!");
        }
        this.edicao = novoEdicao;
    }
}
