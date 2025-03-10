import { ContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
    private limiteChequeEspecial: number;

    constructor(titular: string, saldoInicial: number, limiteChequeEspecial: number) {
        super(titular, saldoInicial);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.getSaldo() + this.limiteChequeEspecial) {
            console.log(`Saque de R$${valor} realizado (incluindo cheque especial).`);
        } else {
            console.log("Saldo insuficiente, mesmo considerando o cheque especial.");
        }
    }
}
