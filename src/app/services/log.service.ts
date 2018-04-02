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

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear$ = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {id: "1", text: "Generated components", date: new Date("07/17/2017 12:52:45")},
    //   {id: "2", text: "Added Bootstrap", date: new Date("07/30/2018 12:52:45")},
    //   {id: "3", text: "Added logs component", date: new Date("01/01/2017 12:52:45")}
    // ];
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFromLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((actValue, index) => {
      if (log.id === actValue.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((actValue, index) => {
      if (log.id === actValue.id) {
        this.logs.splice(index, 1);
      }
    });
  }

  clearState() {
    this.stateSource.next(true);
  }

}
