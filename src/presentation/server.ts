import { CronService } from "./cron/cron-service";

// No es necesario instanciar la clase y acceder a los metodos si se utiliza la palabra reservada 'static'

export class Server {
  public static start() {
    CronService.createJob("*/5 * * * * *", () => {
      const date = new Date();
      console.log("5 seconds", date);
    });
  }
}
