import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "wallets";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("wallet_number").notNullable();
      table.enu("currency", ["usd", "eur", "gbp", "ngn"]).notNullable().defaultTo("ngn");
      table.timestamp("deleted_at", { useTz: true }).nullable();
      table.integer("user_id").unsigned().references("users.id");

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
