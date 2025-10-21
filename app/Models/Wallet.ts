import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Transaction from "./Transaction";
import LedgerEntry from "./LedgerEntry";
import User from "./User";

export enum currencyType {
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  NGN = "NGN",
}
export default class Wallet extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public walletNumber: string;

  @column()
  currency: currencyType = currencyType.NGN;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>;

  @hasMany(() => Transaction, {
    foreignKey: "senderWalletId",
  })
  public sentTransactions: HasMany<typeof Transaction>;

  @hasMany(() => Transaction, {
    foreignKey: "receiverWalletId",
  })
  public receivedTransactions: HasMany<typeof Transaction>;

  @hasMany(() => LedgerEntry)
  public ledgerEntries: HasMany<typeof LedgerEntry>;

  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  public async softDelete() {
    this.deletedAt = DateTime.now();
    await this.save();
  }
  public static queryUndeleted() {
    return this.query().whereNull("deleted_at");
  }

  public static queryDeleted() {
    return this.query().whereNotNull("deleted_at");
  }

  public static queryAll() {
    return this.query();
  }
}
