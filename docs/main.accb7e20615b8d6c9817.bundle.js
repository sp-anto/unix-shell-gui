webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},YuZA:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="YuZA"},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("LMZF"),i=n("x8Hs"),r=n("RyBE"),a=n("9iV4"),c=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.ALL_COMMANDS="allCommands"}return t.prototype.getAll=function(){return this.http.get("assets/commands/"+this.ALL_COMMANDS+".json")},t.prototype.getCommandByName=function(t){return this.http.get("assets/commands/"+t+".json")},t=c([Object(o.y)(),s("design:paramtypes",[a.a])],t)}(),d=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){this.commandService=t}return t.prototype.ngOnInit=function(){var t=this;this.commandService.getAll().subscribe(function(e){return t.commands=e}),this.selectedCommand=""},t.prototype.fetchCommandDocumentation=function(){var t=this;this.command=null,""!==this.selectedCommand&&this.commandService.getCommandByName(this.selectedCommand).subscribe(function(e){t.command=e,t.selectSyntax(e.syntaxes[0])})},t.prototype.removeDuplicateOptions=function(){for(var t=[],e=0;e<this.command.options.length;e++){var n=this.command.options[e];this.isNotEquivalentOfOther(n)&&t.push(e)}for(e=t.length-1;e>=0;e--)this.command.options.splice(e,1)},t.prototype.selectSyntax=function(t){this.selectedSyntax=t;for(var e=0,n=this.command.options;e<n.length;e++){var o=n[e];o.isSelected=!1,o.value=null}},t.prototype.isNotEquivalentOfOther=function(t){for(var e=0,n=this.command.options;e<n.length;e++){var o=n[e];if(t.name===o.equivalent)return!0}return!1},t.prototype.optionClicked=function(t){t.isSelected&&(t.value=null)},t=d([Object(o.m)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]}),p("design:paramtypes",[l])],t)}(),m=n("0nO6"),u=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(t){this.http=t}return t.prototype.getCommandDocumentation=function(t){return this.http.get("assets/commands/"+t+".txt",{responseType:"text"})},t=u([Object(o.y)(),h("design:paramtypes",[a.a])],t)}(),v=n("0WLp"),y=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},b=function(){function t(){}return t=y([Object(o.G)({declarations:[f],imports:[r.a,m.a,a.b,v.a.forRoot()],providers:[l,g],bootstrap:[f]})],t)}();Object(o._10)(),Object(i.a)().bootstrapModule(b).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='\x3c!--This file is licensed under the terms of the Apache License 2.0--\x3e\n\n<div class="container-fluid">\n  <div class="margin0">\n    <label for="command">Select what you want to do: </label>\n    <select id="command" class="form-control commandSelection" [(ngModel)]="selectedCommand"\n            (change)="fetchCommandDocumentation()">\n      <option [value]=""></option>\n      <option *ngFor="let command of commands" [value]="command.name">{{command.name + \' - \' +\n        command.shortDescription}}\n      </option>\n    </select>\n  </div>\n\n  <ngb-tabset *ngIf="command">\n    <ngb-tab *ngFor="let syntax of command.syntaxes">\n      <ng-template ngbTabTitle>\n        <div (click)="selectSyntax(syntax)"><b>{{syntax}}</b></div>\n      </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n\n  <div *ngIf="command" class="optionWrapper">\n    <form #commandForm="ngForm">\n\n\n\n      <div *ngFor="let option of command.options;let i = index" class="options row margin0">\n        <div class="col-1">\n          <input type="checkbox" [(ngModel)]="option.isSelected" name="selected" (click)="optionClicked(option)"/>\n        </div>\n        <div class="col-2">\n          <div class="row"><b>{{(option.isLong ? \'--\' : \'-\') + option.name}}</b></div>\n          <div class="row" *ngIf="option.equivalent"><b>{{\'-\' + option.equivalent}}</b></div>\n        </div>\n        <div class="col-2">\n          <input class="form-control" name="{{\'optValue\' + i}}" type="text"\n                 *ngIf="option.argumentType !== \'NO_ARGUMENT\'"\n                 [required]="option.argumentType === \'ARGUMENT_REQUIRED\'" [(ngModel)]="option.value"\n                 [ngClass]="{\'error\' : option.isSelected && commandForm.controls[\'optValue\' + i]?.errors}"\n                 [disabled]="!option.isSelected">\n          <small *ngIf="commandForm.controls[\'optValue\' + i]?.errors" class="errorMsg">Input is required</small>\n        </div>\n        <div class="col-7">\n          {{option.description}}\n          <span class="glyphicon glyphicon-copy" aria-hidden="true"></span>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div class="result">\n    <a href="javascript:void(0)" class="float-right"><i class="far fa-copy"></i></a>\n  </div>\n\n</div>\n'},hxJY:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"/*\r\n *This file is licensed under the terms of the Apache License 2.0\r\n */div.result{height:50px;background-color:#000;color:#228b22}.margin0{margin:0;padding-bottom:5px;padding-top:5px}div.options:nth-child(2n):not(.hidden){background:#f0f8ff}.optionWrapper{height:600px;overflow-y:scroll}.commandSelection{display:initial;width:auto}input.error{border-color:#a94442;border-left:5px solid #a94442;-webkit-box-shadow:0 1px 1px #a94442 inset,0 0 8px #a94442;box-shadow:inset 0 1px 1px #a94442,0 0 8px #a94442;outline:0 none}.errorMsg{color:#a94442}div.result a i{font-size:x-large}",""]),t.exports=t.exports.toString()}},[0]);