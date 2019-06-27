const routes = require("next-routes");

module.exports = routes()
  .add("/", "index")
  .add("/user", "User")
  .add("/user/:user", "details");
