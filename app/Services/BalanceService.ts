import Wallet from "App/Models/Wallet";
import { Money } from "App/Utils/utils";

export default class BalanceService {
  public static async getWalletById(id: number) {
    const wallet = await Wallet.findOrFail(id);

    if (!wallet) {
      throw new Error("Wallet not found");
    }

    return wallet;
  }

  public static async getBalance(wallet: Wallet) {
    const currency = wallet.currency;
    const ledgerEntries = wallet.ledgerEntries;

    if (ledgerEntries.length === 0) {
      const balance = 0;

      return balance;
    }

    const sum = new Money(0, currency);

    for (let i = 0; i < ledgerEntries.length; i++) {
      if (ledgerEntries[i].entryType === "CREDIT") {
        sum.add(new Money(ledgerEntries[i].amount, currency));
      } else {
        sum.subtract(new Money(ledgerEntries[i].amount, currency));
      }
    }

    const balance = sum.getValue || 0;

    return balance;
  }
}
