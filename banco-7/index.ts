import readLine from "readline-sync"
import { Conta } from "./src/models/Conta.js";

console.log("=== Cadastro da Conta ===");
const novoConta = new Conta(
    1880,
    "Maria",
    999,
    
);

console.log(`\nProduto cadastrado: ${novoConta.getAgencia}`);
console.log(`Registro: ${novoConta.getAgencia}`);
console.log(`Registro: ${novoConta.getSaldo}`);

novoConta.setAgencia=readLine.questionInt("\nDIGITE O NUMERO DA AGENCIA: ");
novoConta.setTitular=readLine.question("\nDIGITE O NOME DO TITULAR: ");
novoConta.setSaldo=readLine.questionInt("\nDIGITE O NOVO SALDO: ");

console.log("\n================================================");
console.log("      DADOS DA CONTA       ");
console.log("================================================");

console.log(`Agencia:                 ${novoConta.getAgencia}`);
console.log(`Titular:                  ${novoConta.getTitular}`);
console.log(`Saldo:                  ${novoConta.getSaldo}`);
console.log("================================================\n");