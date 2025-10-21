import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "transactions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.float("amount");
      table.enu("currency", ["usd", "eur", "gbp", "ngn"]).notNullable();
      table.enu("type", ["deposit", "withdrawal", "transfer"]);

      table.string("description");

      table
        .integer("sender_wallet_id")
        .unsigned()
        .references("id")
        .inTable("wallets")
        .nullable();

      table
        .integer("receiver_wallet_id")
        .unsigned()
        .references("id")
        .inTable("wallets")
        .nullable();

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
