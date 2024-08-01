export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  origin: string;
  createAt?: Date;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public origin: string;
  public createAt: Date;

  constructor(options: LogEntityOptions) {
    const { level, message, origin, createAt = new Date() } = options;
    this.level = level;
    this.message = message;
    this.createAt = createAt;
    this.origin = origin;
  }

  static formJson = (json: string): LogEntity => {
    const { message, level, createAt, origin } = JSON.parse(json);

    const log = new LogEntity({ message, level, createAt, origin });
    log.createAt = new Date(createAt);

    return log;
  };
}
