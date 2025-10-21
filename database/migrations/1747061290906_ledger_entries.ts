import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "ledger_entries";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.float("amount");
      table.enum("entry_type", ["credit", "debit"]);
      table.enum("currency", ["usd", "eur", "gbp"]);
      table.integer("transaction_id").unsigned().references("transactions.id");
      table.integer("wallet_id").unsigned().references("wallets.id");
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
