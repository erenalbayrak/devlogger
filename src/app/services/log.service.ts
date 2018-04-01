import { Injectable } from '@angular/core';
import {Log} from "../models/log";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog$ = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: "1", text: "Generated components", date: new Date("07/17/2017 12:52:45")},
      {id: "2", text: "Added Bootstrap", date: new Date("07/30/2018 12:52:45")},
      {id: "3", text: "Added logs component", date: new Date("01/01/2017 12:52:45")}
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFromLog(log: Log) {
    this.logSource.next(log);
  }
}
