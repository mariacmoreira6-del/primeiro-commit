import readLine from "readline-sync"
import { Funcionario } from "./src/models/Funcionario.js";

console.log("=== Cadastro De Produto ===");
const novoFuncionario = new Funcionario(
    "Noites Brancas",
    99,
    888,
    
);

console.log(`\nNome funcionário: ${novoFuncionario.getNome}`);
console.log(`\nMatricula do Funcionario: ${novoFuncionario.getMatricula}`);
console.log(`\nSalario do funcionario: ${novoFuncionario.getSalario}`);

novoFuncionario.setNome=readLine.question("\nDigite o nome do funcionario: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS DO FUNCIONaRIO         ");
console.log("================================================");

console.log(`Nome:                  ${novoFuncionario.getNome}`);
console.log(`Matricula:                 ${novoFuncionario.getMatricula}`);
console.log(`salario:                 ${novoFuncionario.getSalario}`);
console.log("================================================\n");