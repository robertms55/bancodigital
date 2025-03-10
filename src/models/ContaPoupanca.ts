import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    private rendimento: number; // % de rendimento ao mês

    constructor(titular: string, saldoInicial: number, rendimento: number) {
        super(titular, saldoInicial);
        this.rendimento = rendimento;
    }

    public aplicarRendimento(): void {
        const ganho = this.getSaldo() * (this.rendimento / 100);
        this.depositar(ganho);
        console.log(`Rendimento de R$${ganho.toFixed(2)} aplicado.`);
    }
}
