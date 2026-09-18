import readLine from "readline-sync"
import { Funcionario} from "./src/models/Funcionario.js";

console.log("=== Cadastro De Produto ===");
const novoFuncionario= new Funcionario(
    1880,
    "Noites Brancas",
    222,
    444,
    555,
    "nn",
    );


console.log(`\nRegistro: ${novoFuncionario.getNome}`);
console.log(`Registro: ${novoFuncionario.getMatricula}`);
console.log(`Registro: ${novoFuncionario.getSalario}`);
console.log(`Registro: ${novoFuncionario.getTelefone}`);
console.log(`Registro: ${novoFuncionario.getDataNascimento}`);
console.log(`Registro: ${novoFuncionario.getEndereco}`);

novoFuncionario.setMatricula=readLine.questionInt("\nDigite a matricula do funcionario: ");
novoFuncionario.setNome=readLine.question("\nDigite o nome do funcionario: ");
novoFuncionario.setSalario=readLine.questionInt("\nDigite o salario do funcionario: ");
novoFuncionario.setTelefone=readLine.questionInt("\nDigite o telefone do funcionario: ");
novoFuncionario.setDataNascimento=readLine.questionInt("\nDigite a data de nascimento do funcionario: ");
novoFuncionario.setEndereco=readLine.question("\nDigite o endereço do funcionario: ");

console.log("\n================================================");
console.log("      DADOS COMPLETOS FUNCIONARIO          ");
console.log("================================================");

console.log(`Matricula:                  ${novoFuncionario.getMatricula}`);
console.log(`Nome:                 ${novoFuncionario.getNome}`);
console.log(`Salario:                 ${novoFuncionario.getSalario}`);
console.log(`Telefone:                 ${novoFuncionario.getTelefone}`);
console.log(`DataNascimento:                 ${novoFuncionario.getDataNascimento}`);
console.log(`Endereco:                 ${novoFuncionario.getEndereco}`);
console.log("================================================\n");