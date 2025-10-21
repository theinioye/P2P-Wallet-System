import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.post("/signup", "CreateUsersController.handle");
  Route.post("/signin", "CreateUsersController.logIn");
}).prefix("auth");
