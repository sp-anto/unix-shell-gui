import {Component, OnInit} from '@angular/core';
import {CommandService} from './service/command.service';
import {Command} from './model/command';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  command: Command;
  private commands: string[];
  selectedCommand: string;

  constructor(private commandService: CommandService) {
  }

  ngOnInit() {
    this.commands = ['', 'mkdir', 'mv', 'touch'];
    this.selectedCommand = '';
  }

  fetchCommandDocumentation(): void {
    this.command = null;
    if (this.selectedCommand !== '') {
      this.commandService.getCommandByName(this.selectedCommand).then(command => {
        this.command = command;
        console.log(command);
      });
    }
  }

}
