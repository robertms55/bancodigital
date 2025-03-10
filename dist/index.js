"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContaCorrente_1 = require("./models/ContaCorrente");
const ContaPoupanca_1 = require("./models/ContaPoupanca");
const conta1 = new ContaCorrente_1.ContaCorrente("Roberto Moreira", 1000, 500);
conta1.depositar(500);
conta1.sacar(1800); // Testando cheque especial
const conta2 = new ContaPoupanca_1.ContaPoupanca("Ana Souza", 2000, 0.5);
conta2.aplicarRendimento();
