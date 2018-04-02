import { Component, OnInit } from '@angular/core';
import {LogService} from "../../services/log.service";
import {Log} from "../../models/log";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  log: Log = {text: "", id: "", date: ""};
  isNew = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog$.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.log = log;
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      // create new log
      const newLog = {text: this.log.text, id: this.getUUID(), date: new Date()};
      this.logService.addLog(newLog);
    }
    else {
      // Update existing log
      const updatedLog = {text: this.log.text, id: this.log.id, date: new Date()};
      this.logService.updateLog(updatedLog);
    }
    // clear state
    this.clearState();
  }

  private clearState() {
    this.isNew = true;
    this.log = {text: "", id: "", date: ""};

    this.logService.clearState();
  }

  private getUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
