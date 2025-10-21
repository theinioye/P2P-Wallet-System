import { DateTime } from "luxon";
import {
  BaseModel,
  belongsTo,
  BelongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Wallet, { currencyType } from "./Wallet";
import LedgerEntry from "./LedgerEntry";

export enum transactionType {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
  TRANSFER = "transfer",
}
export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column()
  public description: string;

  @column()
  transactionType: transactionType;

  @column()
  amount: number;

  @column()
  currency: currencyType;

  @belongsTo(() => Wallet, {
    foreignKey: "senderWalletId",
  })
  public senderWallet: BelongsTo<typeof Wallet>;

  @belongsTo(() => Wallet, {
    foreignKey: "receiverWalletId",
  })
  public receiverWallet: BelongsTo<typeof Wallet>;

  @hasMany(() => LedgerEntry)
  public ledgerEntries: HasMany<typeof LedgerEntry>;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
