import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne,
} from "@ioc:Adonis/Lucid/Orm";
import Wallet from "./Wallet";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  phoneNumber: string;

  @column()
  public tag: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public emailVerifiedAt: DateTime | null;

  @column()
  public rememberMeToken: string | null;

  @hasOne(() => Wallet)
  public wallet: HasOne<typeof Wallet>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
