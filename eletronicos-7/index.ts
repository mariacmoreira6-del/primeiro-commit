import readLine from "readline-sync"
import { Produtos } from "./src/models/Produtos.js";

console.log("=== Cadastro De Produto ===");
const novoProdutos = new Produtos(
    1880,
    "Noites Brancas",
    999,
    
);

console.log(`\nProduto cadastrado: ${novoProdutos.getCodigodebarras}`);
console.log(`Registro: ${novoProdutos.getPreco}`);
console.log(`Registro: ${novoProdutos.getFabricante}`);

novoProdutos.setCodigodebarras=readLine.questionInt("\nDIGITE O CÓDIGO DE BARRAS: ");
novoProdutos.setPreco=readLine.questionInt("\nDIGITE O NOVO PRECO: ");
novoProdutos.setFabricante=readLine.question("\nDIGITE O FABRICANTE: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS PRODUTO         ");
console.log("================================================");

console.log(`Codigodebarras:                 ${novoProdutos.getCodigodebarras}`);
console.log(`Preco:                  ${novoProdutos.getPreco}`);
console.log(`Fabricante:                  ${novoProdutos.getFabricante}`);
console.log("================================================\n");