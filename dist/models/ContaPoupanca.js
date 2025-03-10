"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaPoupanca extends ContaBancaria_1.ContaBancaria {
    constructor(titular, saldoInicial, rendimento) {
        super(titular, saldoInicial);
        this.rendimento = rendimento;
    }
    aplicarRendimento() {
        const ganho = this.getSaldo() * (this.rendimento / 100);
        this.depositar(ganho);
        console.log(`Rendimento de R$${ganho.toFixed(2)} aplicado.`);
    }
}
exports.ContaPoupanca = ContaPoupanca;
