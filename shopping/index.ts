import readLine from "readline-sync"
import { Produtos } from "./src/models/Produtos.js";

console.log("=== Cadastro De Produto ===");
const novoProdutos = new Produtos(
    88888,
    "Morango",
    10
    
);

console.log(`\nProduto cadastrado: ${novoProdutos.getNome}`);
console.log(`Registro: ${novoProdutos.getId}`);

novoProdutos.setId = readLine.questionInt("\nDigite o Id do Produto: ");
novoProdutos.setPreco = readLine.questionInt("Digite o preço do produto: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS DO PRODUTO           ");
console.log("================================================");

console.log(`ID:                  ${novoProdutos.getId}`);
console.log(`Nome:                 ${novoProdutos.getNome}`);
console.log(`Preco:             ${novoProdutos.getPreco}`);
console.log("================================================\n");