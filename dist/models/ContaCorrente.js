"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaCorrente extends ContaBancaria_1.ContaBancaria {
    constructor(titular, saldoInicial, limiteChequeEspecial) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.getSaldo() + this.limiteChequeEspecial) {
            console.log(`Saque de R$${valor} realizado (incluindo cheque especial).`);
        }
        else {
            console.log("Saldo insuficiente, mesmo considerando o cheque especial.");
        }
    }
}
exports.ContaCorrente = ContaCorrente;
