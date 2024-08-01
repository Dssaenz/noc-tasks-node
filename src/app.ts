import { Server } from "./presentation/server";
// import { envs } from "./config/plugins/envs.plugins";

(() => {
  main();
})();

function main() {
  Server.start();
}
