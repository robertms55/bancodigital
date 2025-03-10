"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
        else {
            console.log("Valor inválido para depósito.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
        else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }
}
exports.ContaBancaria = ContaBancaria;
