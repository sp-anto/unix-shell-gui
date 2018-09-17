webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},YuZA:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="YuZA"},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("LMZF"),r=n("x8Hs"),i=n("RyBE"),a=n("9iV4"),s=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.ALL_COMMANDS="allCommands"}return t.prototype.getAll=function(){return this.http.get("assets/commands/"+this.ALL_COMMANDS+".json")},t.prototype.getCommandByName=function(t){return this.http.get("assets/commands/"+t+".json")},t=s([Object(o.y)(),c("design:paramtypes",[a.a])],t)}(),d=n("S4Bb"),p=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},m=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.commandService=t,this.operators=[{name:"\\n",replace:"\n",description:"New Line"},{name:"|",description:"Bitwise OR"},{name:"&&",description:"Logical AND"},{name:"||",description:"Logical OR"},{name:"-eq",description:"Is equal to"},{name:"-ne",description:"Is not equal to"},{name:"-gt",description:"Is greater than"},{name:"-gt",description:"Is greater than or equals to"},{name:"-lt",description:"Is less than"},{name:"-le",description:"Is less than or equal to"}],this.structures=[{name:"if-then-elif-fi"},{name:"while-do-done"},{name:"case-esac"}]}return t.prototype.ngOnInit=function(){var t=this;this.console="",this.commandService.getAll().subscribe(function(e){return t.commands=e}),this.selectedCommand="",this.settings=this.readSettingsCookies()},t.prototype.ngAfterViewInit=function(){var t=this;this.midDivHeight(),window.onresize=function(e){t.midDivHeight()}},t.prototype.fetchCommandDocumentation=function(){var t=this;this.command=null,this.operator=this.operators.find(function(e){return e.name===t.selectedCommand}),""===this.selectedCommand||this.operator||this.commandService.getCommandByName(this.selectedCommand).subscribe(function(e){t.command=e,t.selectSyntax(e.syntaxes[0])})},t.prototype.removeDuplicateOptions=function(){for(var t=[],e=0;e<this.command.options.length;e++){var n=this.command.options[e];this.isNotEquivalentOfOther(n)&&t.push(e)}for(e=t.length-1;e>=0;e--)this.command.options.splice(e,1)},t.prototype.selectSyntax=function(t){this.selectedSyntax=t;var e=t.replace(this.command.name,"").split(" ");e=e.filter(function(t){return t.indexOf("OPTION")<0&&""!==t}),this.arguments=[];for(var n=0,o=e;n<o.length;n++){var r=o[n],i=r.includes("..."),a=r.includes("[")&&r.includes("]"),s=r.replace("...","").replace("[","").replace("]","");this.arguments.push({isMultiple:i,isOptional:a,name:s,arg:r})}for(var c=0,l=this.command.options;c<l.length;c++){var d=l[c];d.isSelected=!1,d.value=null}},t.prototype.isNotEquivalentOfOther=function(t){for(var e=0,n=this.command.options;e<n.length;e++){var o=n[e];if(t.name===o.equivalent)return!0}return!1},t.prototype.optionClicked=function(t){t.isSelected&&(t.value=null)},t.prototype.midDivHeight=function(){var t=d("#topDiv").height(),e=d("#bottomDiv").height(),n=d(window).height();d("#middleDiv").height(n-t-e)},t.prototype.readSettingsCookies=function(){var t=document.cookie;return t?JSON.parse(t):{addComments:!1,useLongOptions:!1}},t.prototype.setSettings=function(t){this.settings[t]?this.settings[t]=!1:this.settings[t]=!0,document.cookie=JSON.stringify(this.settings)},t.prototype.copyConsole=function(t){d("#copyHelper").val(t),d("#copyHelper").select(),document.execCommand("copy")},t.prototype.isInputFocused=function(){return d("#console").is(":focus")},t.prototype.insertCommandToConsole=function(){var t=this.buildCommad(),e=d("#console").prop("selectionStart"),n=d("#console").prop("selectionEnd"),o=this.console.substring(0,e);o+=t+this.console.substring(n),this.console=o},t.prototype.buildCommad=function(){if(this.command){for(var t="",e=0,n=this.command.options;e<n.length;e++){(m=n[e]).isSelected&&(this.settings.useLongOptions&&m.isLong?t+="--"+m.name+(m.value?"="+m.value:"")+" ":m.isLong?t+="-"+m.equivalent+(m.value?" "+m.value:"")+" ":t+="-"+m.name+(m.value?" "+m.value:"")+" ")}for(var o=this.selectedSyntax.replace("[OPTION]...",t),r=0,i=this.arguments;r<i.length;r++){var a=i[r],s="";a.value&&(s=a.value),o=o.replace(a.arg,s)}o=(o=o.replace(/ +/g," ")).trim();var c="";if(this.settings.addComments){var l=this.command.shortDescription;c="# "+l.substring(0,1).toUpperCase()+l.substring(1)+"\n";for(var d=0,p=this.command.options;d<p.length;d++){var m;(m=p[d]).isSelected&&(this.settings.useLongOptions&&m.isLong?c+="# --"+m.name+" "+m.description+"\n":m.isLong?c+="# -"+m.equivalent+" "+m.description+"\n":c+="# -"+m.name+" "+m.description+"\n")}}return c+o}return this.operator?this.operator.replace?this.operator.replace:this.operator.name:""},t.prototype.copyCurrentCommand=function(){this.copyConsole(this.buildCommad())},t=p([Object(o.m)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]}),m("design:paramtypes",[l])],t)}(),f=n("0nO6"),g=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(t){this.http=t}return t.prototype.getCommandDocumentation=function(t){return this.http.get("assets/commands/"+t+".txt",{responseType:"text"})},t=g([Object(o.y)(),v("design:paramtypes",[a.a])],t)}(),b=n("0WLp"),y=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},x=function(){function t(){}return t=y([Object(o.G)({declarations:[u],imports:[i.a,f.a,a.b,b.a.forRoot()],providers:[l,h],bootstrap:[u]})],t)}();Object(o._10)(),Object(r.a)().bootstrapModule(x).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='\x3c!--This file is licensed under the terms of the Apache License 2.0--\x3e\r\n\r\n<div class="container-fluid" id="topDiv">\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="float-left">\r\n        <h5>Unix Command Builder</h5>\r\n      </div>\r\n\r\n      <div ngbDropdown class="d-inline-block float-right" autoClose="false" placement="bottom-right">\r\n        <button class="btn btn-primary btn-sm" href="javascript:void(0)" id="dropdownBasic1" ngbDropdownToggle>Settings <i class="fas fa-cog"></i></button>\r\n        <div ngbDropdownMenu aria-labelledby="dropdownBasic1">\r\n          <button class="dropdown-item" (click)="setSettings(\'addComments\')"><i class="far fa-square" *ngIf="!settings.addComments"></i><i class="far fa-check-square" *ngIf="settings.addComments"></i> Add comments</button>\r\n          <button class="dropdown-item" (click)="setSettings(\'useLongOptions\')"><i class="far fa-square" *ngIf="!settings.useLongOptions"></i><i class="far fa-check-square" *ngIf="settings.useLongOptions"></i> Use long options</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<form #commandForm="ngForm">\r\n  <div class="container-fluid" id="middleDiv">\r\n    <div class="margin0 row" id="selectDiv">\r\n      <div class="col-5">\r\n        <div class="form-group">\r\n          <label for="command">Select command/operator/structure: </label>\r\n          <select id="command" class="form-control" [(ngModel)]="selectedCommand" [ngModelOptions]="{standalone: true}"\r\n                  (change)="fetchCommandDocumentation();">\r\n            <option [value]=""></option>\r\n            <optgroup label="Structure">\r\n              <option *ngFor="let structure of structures" [value]="structure.name">{{structure.name}}</option>\r\n            </optgroup>\r\n            <optgroup label="Operator">\r\n              <option *ngFor="let operator of operators" [value]="operator.name">{{operator.name}}</option>\r\n            </optgroup>\r\n            <optgroup label="Commands">\r\n              <option *ngFor="let command of commands" [value]="command.name">{{command.name + \' - \' +\r\n                command.shortDescription}}\r\n              </option>\r\n            </optgroup>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class="col-5 left-border"><label>{{command ? command.longDescription : \'\'}}{{operator ? operator.description : \'\'}}</label></div>\r\n      <div class="col-2 left-border d-flex justify-content-center align-items-center">\r\n        <div>\r\n          <i *ngIf="(command && commandForm.form.valid) || operator" class="fas fa-check valid-indicator valid"></i>\r\n          <i *ngIf="command && !commandForm.form.valid" class="fas fa-times valid-indicator invalid"></i>\r\n        </div>\r\n        <div>\r\n          <span *ngIf="command && commandForm.form.valid || operator" class="valid">Command is valid. Locate the cursor at the position you want to enter the command.</span>\r\n          <span *ngIf="command && !commandForm.form.valid" class="invalid">Command is not valid</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ngb-tabset *ngIf="command">\r\n      <ngb-tab *ngFor="let syntax of command.syntaxes">\r\n        <ng-template ngbTabTitle>\r\n          <div (click)="selectSyntax(syntax)"><b>{{syntax}}</b></div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n\r\n    <div *ngIf="command" class="optionWrapper">\r\n      <div class="argsRow row">\r\n        <div class="col-3" *ngFor="let argument of arguments">\r\n          <label placement="right-bottom" ngbTooltip="{{(argument.isOptional ? \'Argument is optional.\' : \'Argument is required.\') + (argument.isMultiple ? \' You can add many argments separated by space character.\' : \'\')}}">\r\n            <b>{{argument.name}}</b>\r\n            <i class="fas fa-question-circle"></i>\r\n          </label>\r\n          <input type="text" name="{{argument.name}}"\r\n                 class="form-control col-12"\r\n                 [required]="!argument.isOptional" [(ngModel)]="argument.value"\r\n                 [ngClass]="{\'error\' : !argument.isOptional && commandForm.controls[argument.name]?.errors}"/>\r\n          <small *ngIf="commandForm.controls[argument.name]?.errors" class="errorMsg">Input is required</small>\r\n        </div>\r\n      </div>\r\n      <div *ngFor="let option of command.options;let i = index" class="options row margin0">\r\n        <div class="col-1">\r\n          <input type="checkbox" [(ngModel)]="option.isSelected" name="selected" (click)="optionClicked(option)"/>\r\n        </div>\r\n        <div class="col-2">\r\n          <div class="row"><b>{{(option.isLong ? \'--\' : \'-\') + option.name}}</b></div>\r\n          <div class="row" *ngIf="option.equivalent"><b>{{\'-\' + option.equivalent}}</b></div>\r\n        </div>\r\n        <div class="col-2">\r\n          <input class="form-control" name="{{\'optValue\' + i}}" type="text"\r\n                 *ngIf="option.argumentType !== \'NO_ARGUMENT\'"\r\n                 [required]="option.argumentType === \'ARGUMENT_REQUIRED\'" [(ngModel)]="option.value"\r\n                 [ngClass]="{\'error\' : option.isSelected && commandForm.controls[\'optValue\' + i]?.errors}"\r\n                 [disabled]="!option.isSelected">\r\n          <small *ngIf="commandForm.controls[\'optValue\' + i]?.errors" class="errorMsg">Input is required</small>\r\n        </div>\r\n        <div class="col-7">\r\n          {{option.description}}\r\n          <span class="glyphicon glyphicon-copy" aria-hidden="true"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="fixed-bottom" id="bottomDiv">\r\n    <div class="container-fluid">\r\n      <div class="row">\r\n        <div class="col-10">\r\n          <textarea class="col-12" rows="7" [(ngModel)]="console" id="console" [ngModelOptions]="{standalone: true}"></textarea>\r\n\r\n        </div>\r\n        <div class="col-2 no-left-padding">\r\n          <button class="btn btn-primary col-12" (click)="insertCommandToConsole()" [disabled]="(command && !commandForm.form.valid) || (!command && !operator)"><i class="fas fa-i-cursor"></i> Insert</button>\r\n          <button class="btn btn-primary col-12" (click)="copyCurrentCommand()" [disabled]="(command && !commandForm.form.valid) || (!command && !operator)"><i class="far fa-clone"></i> Copy current command</button>\r\n          <button class="btn btn-primary col-12" (click)="copyConsole(console)"><i class="far fa-clone"></i> Copy console</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<textarea id="copyHelper" style="position: fixed;top: -300px;left: -300px"></textarea>\r\n'},hxJY:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"/*\r\n *This file is licensed under the terms of the Apache License 2.0\r\n */div.result{height:50px;background-color:#000;color:#228b22}.margin0{margin:0;padding-bottom:5px;padding-top:5px}div.options:nth-child(2n):not(.hidden){background:#f0f8ff}#middleDiv{overflow-y:scroll}\r\n\r\n/*.commandSelection {*/\r\n\r\n/*display: initial;*/\r\n\r\n/*width: auto;*/\r\n\r\n/*}*/input.error{border-color:#a94442;border-left:5px solid #a94442;-webkit-box-shadow:0 1px 1px #a94442 inset,0 0 8px #a94442;box-shadow:inset 0 1px 1px #a94442,0 0 8px #a94442;outline:0 none}.errorMsg,.invalid{color:#a94442}div.result a i{font-size:x-large}textarea{resize:none;font-size:14px;font-family:Consolas;background-color:#0e0489;color:#fff;white-space:nowrap}.no-left-padding{padding-left:0}.no-left-padding button{margin-bottom:5px}.dropdown-toggle:after{display:none}#bottomDiv,#selectDiv,#topDiv,.nav-tabs .nav-link.active,div.argsRow{background-color:#efefef}div.optionWrapper{border:1px solid;border-color:#dee2e6 #dee2e6 #fff;border-top:0}div.argsRow{padding-bottom:10px;padding-top:10px;margin-left:0;margin-right:0}#selectDiv{border:1px solid #dee2e6;margin-bottom:10px;margin-top:10px}.left-border{border-left:1px solid}.valid-indicator{font-size:3em}.valid{color:#006e00}",""]),t.exports=t.exports.toString()}},[0]);