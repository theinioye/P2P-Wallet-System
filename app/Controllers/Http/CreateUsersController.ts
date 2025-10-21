import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Wallet from "App/Models/Wallet";

export default class CreateUsersController {
  public async handle({ request, response }: HttpContextContract) {
    try {
      const { phoneNumber, password } = request.only([
        "phoneNumber",
        "password",
      ]);

      const existingWallet = await Wallet.findBy("walletNumber", phoneNumber);

      if (existingWallet) {
        return response.badRequest({ message: "Wallet already exists" });
      }

      const user = await User.create({
        phoneNumber,
        password,
      });
      await user.save();

      return response.created(user);
    } catch (error) {
      return response.status(500).json({
        message: "An error occurred while creating the user",
        error: error.message,
      });
    }
  }

  public async logIn({ auth, request, response }: HttpContextContract) {
    // try {
    const { phoneNumber, password } = request.body();
    console.log("Received phoneNumber:", phoneNumber);
    console.log("Received password:", password);

    const user = await User.findBy("phoneNumber", phoneNumber);

    if (!user) {
      return response.unauthorized({
        status: "error",
        message: "user not found",
      });
    }

    console.log("User found: heloooooooo");
    console.log(user);

    const token = await auth.use("api").attempt(user.phoneNumber, password);

    return token;

    // return response.ok({
    //   status: "success",
    //   data: token,
    // });
    // } catch (error) {
    //   console.error("Login error:", error);
    //   return response.unauthorized({
    //     status: "error",
    //     message: "try block failed",
    //   });
    // }
  }
}
