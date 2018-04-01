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

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.selectedLog$.subscribe(log => {
      if (log.id !== null) {
        this.log = log;
      }
    });
  }

}
