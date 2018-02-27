/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommandDocumentationService {

  constructor(
    private http: HttpClient
  ) {}

  getCommandDocumentation(name: string): Observable<string> {
    return this.http.get('assets/commands/' + name + '.txt', {responseType: 'text'});
  }

}
