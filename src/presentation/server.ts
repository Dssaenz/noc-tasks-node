import { CheckService } from "../domain/use-cases/check-service";
import { CronService } from "./cron/cron-service";

// No es necesario instanciar la clase y acceder a los metodos si se utiliza la palabra reservada 'static'

export class Server {
  public static start() {
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://google.com";

      new CheckService(
        () => console.log(`Success ${url}`),
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
