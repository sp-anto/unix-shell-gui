import {Component, Input, OnInit} from '@angular/core';
import {Command} from '../model/command';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.css']
})
export class CommandDetailComponent implements OnInit {
  @Input() command: Command;

  constructor() { }

  ngOnInit() {
  }

}
