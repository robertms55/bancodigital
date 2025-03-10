import { ContaCorrente } from "./models/ContaCorrente";
import { ContaPoupanca } from "./models/ContaPoupanca";

const conta1 = new ContaCorrente("Roberto Moreira", 1000, 500);
conta1.depositar(500);
conta1.sacar(1800); // Testando cheque especial

const conta2 = new ContaPoupanca("Ana Souza", 2000, 0.5);
conta2.aplicarRendimento();
