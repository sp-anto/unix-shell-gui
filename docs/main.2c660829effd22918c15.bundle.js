webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},YuZA:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="YuZA"},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("LMZF"),r=n("x8Hs"),i=n("RyBE"),c=function(){function t(){this._syntax=[],this._commandOptions=[],this._commandArguments=[]}return Object.defineProperty(t.prototype,"name",{get:function(){return this._name},set:function(t){this._name=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"syntax",{get:function(){return this._syntax},set:function(t){this._syntax=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"description",{get:function(){return this._description},set:function(t){this._description=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"commandOptions",{get:function(){return this._commandOptions},set:function(t){this._commandOptions=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"commandArguments",{get:function(){return this._commandArguments},set:function(t){this._commandArguments=t},enumerable:!0,configurable:!0}),t}(),a=n("9iV4"),s=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){this.http=t}return t.prototype.getCommandDocumentation=function(t){return this.http.get("assets/commands/"+t+".txt",{responseType:"text"})},t=s([Object(o.w)(),f("design:paramtypes",[a.a])],t)}(),m=function(){function t(t,e){this._token=t,this._description=e}return Object.defineProperty(t.prototype,"token",{get:function(){return this._token},set:function(t){this._token=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"description",{get:function(){return this._description},set:function(t){this._description=t},enumerable:!0,configurable:!0}),t}(),p=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.commandDocumentationService=t,this.USAGE_CONST="Usage:",this.OR_CONST="or:",this.OPTIONS_START_CONST="Mandatory arguments to long options are mandatory for short options too."}return t.prototype.getCommandByName=function(t){var e,n=this,o=new Promise(function(t){return e=t});return this.commandDocumentationService.getCommandDocumentation(t).toPromise().then(function(o){var r=n.extractCommandInfo(t,o);e(r)}),o},t.prototype.extractCommandInfo=function(t,e){var n=new c;n.name=t;var o=e.split("\n");return n.syntax=this.readSyntax(o),n.description=this.readDescription(o),n.commandOptions=this.readOptions(o),n},t.prototype.readSyntax=function(t){for(var e=[],n=0;n<t.length;n++){var o=t[n].trim();if(o.startsWith(this.USAGE_CONST))e.push(o.replace(this.USAGE_CONST,"").trim());else{if(!o.startsWith(this.OR_CONST)){t.splice(0,n);break}e.push(o.replace(this.OR_CONST,"").trim())}}return e},t.prototype.readDescription=function(t){for(var e="",n=0;n<t.length;n++){var o=t[n].trim();if(o===this.OPTIONS_START_CONST){t.splice(0,n+1);break}o&&(e+=o+" ")}return e=e.substring(0,e.length-1)},t.prototype.readOptions=function(t){for(var e=[],n=0;n<t.length;n++){var o=t[n].trim();if(!o)break;if(o.startsWith("-")){var r=o.substring(0,o.indexOf(" "));o=o.replace(r,"").trim(),r=r.replace(",",""),o.startsWith("--")&&(o=o.substring(o.indexOf(" ")).trim());var i=new m(r,o);e.push(i)}else console.log(o),e[e.length-1].description+=" "+o}return e},t=p([Object(o.w)(),d("design:paramtypes",[u])],t)}(),h=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(){function t(t){this.commandService=t}return t.prototype.ngOnInit=function(){this.commands=["","mkdir","mv","touch"],this.selectedCommand=""},t.prototype.fetchCommandDocumentation=function(){var t=this;this.command=null,""!==this.selectedCommand&&this.commandService.getCommandByName(this.selectedCommand).then(function(e){t.command=e})},t=h([Object(o.m)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]}),y("design:paramtypes",[l])],t)}(),g=n("0nO6"),O=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},_=function(){function t(){}return t=O([Object(o.E)({declarations:[b],imports:[i.a,g.a,a.b],providers:[l,u],bootstrap:[b]})],t)}();Object(o._7)(),Object(r.a)().bootstrapModule(_).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='\x3c!--This file is licensed under the terms of the Apache License 2.0--\x3e\n<div>\n  <label for="command">Select Command: </label>\n  <select id="command" required [(ngModel)]="selectedCommand" (change)="fetchCommandDocumentation()">\n    <option *ngFor="let command of commands" [value]="command">{{command}}</option>\n  </select>\n</div>\n\n<div>\n  <pre>{{command | json}}</pre>\n</div>\n'},hxJY:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"/*\r\n *This file is licensed under the terms of the Apache License 2.0\r\n */pre{color:#228b22;background-color:#000}",""]),t.exports=t.exports.toString()}},[0]);