// La palabra reservada 'abstract' evita que se creen instancias de la clase creada.
// Se obliga el comportamiento definido en esta clase(LogDatasource) sobre otras clases.
// Cualquir clase que implemente esta(LogDatasource), debe contener lo que se ha definido esta clase.

import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
