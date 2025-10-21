export type currencyType = "USD" | "EUR" | "GBP" | "NGN";

export class Money {
  constructor(private amount: number, private currency: string) {}

  public getValue(): number {
    return this.amount;
  }
  public getCurrency(): string {
    return this.currency;
  }

  public add(money: Money): Money {
    if (this.currency !== money.getCurrency()) {
      throw new Error("Cannot add money of different currencies");
    }
    return new Money(this.amount + money.getValue(), this.currency);
  }

  public subtract(money: Money): Money {
    if (this.currency !== money.getCurrency()) {
      throw new Error("Cannot subtract money of different currencies");
    }
    return new Money(this.amount - money.getValue(), this.currency);
  }
}
