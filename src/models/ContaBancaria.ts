
export class ContaBancaria {
    private saldo: number;
    private titular: string;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }
}
