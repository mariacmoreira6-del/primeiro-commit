import readLine from "readline-sync"
import { Veiculo } from "./src/models/Veiculo.js";

console.log("=== Cadastro De Veiculos ===");
const novoVeiculo = new Veiculo(
    "cadilac",
    "uno",
    10,
    "rosa"
    
);

console.log(`\nVeiculo cadastrado: ${novoVeiculo.getMarca}`);
console.log(`Registro: ${novoVeiculo.getModelo}`);

novoVeiculo.setMarca= readLine.question("\nDigite a marca do Produto: ");
novoVeiculo.setModelo = readLine.question("Digite o modelo do produto: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS DO veiculo           ");
console.log("================================================");

console.log(`Marca:                  ${novoVeiculo.getMarca}`);
console.log(`Modelo:                 ${novoVeiculo.getModelo}`);
console.log(`Ano:             ${novoVeiculo.getAno}`);
console.log(`Cor:             ${novoVeiculo.getCor}`);
console.log("================================================\n");