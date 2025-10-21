import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BalanceService from "App/Services/BalanceService";

export default class TransactionsController {
  public async getBalance({ request, response }: HttpContextContract) {
    const { userId } = request.body();
    try {
      const wallet = await BalanceService.getWalletById(userId);

      const balance = await BalanceService.getBalance(wallet);


      return response.ok({ balance });
    } catch (error) {}
  }
  public async 
}
