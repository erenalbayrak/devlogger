import { Injectable } from '@angular/core';
import {Log} from "../models/log";

@Injectable()
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: "1", text: "Generated components", date: new Date("07/17/2017 12:52:45")},
      {id: "2", text: "Added Bootstrap", date: new Date("07/30/2018 12:52:45")},
      {id: "3", text: "Added logs component", date: new Date("01/01/2017 12:52:45")}
    ];
  }

  getLogs(): Log[] {
    return this.logs;
  }
}
