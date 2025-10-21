import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Wallet, { currencyType } from "./Wallet";
import Transaction from "./Transaction";

export enum entryType {
  DEBIT = "DEBIT",
  CREDIT = "CREDIT",
}

export default class LedgerEntry extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  amount: number;

  @column()
  entryType: entryType;

  @column()
  currency: currencyType;

  @belongsTo(() => Transaction)
  public transaction: BelongsTo<typeof Transaction>;

  @belongsTo(() => Wallet)
  public wallet: BelongsTo<typeof Wallet>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
