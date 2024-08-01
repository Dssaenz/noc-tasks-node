import { CheckService } from "../domain/use-cases/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-sytem.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.impl.repository";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource()
);

// No es necesario instanciar la clase y acceder a los metodos si se utiliza la palabra reservada 'static'
export class Server {
  public static start() {
    CronService.createJob("*/5 * * * * *", () => {
      const url = "https://google.com";

      new CheckService(
        fileSystemLogRepository,
        () => console.log(`Success ${url}`),
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
