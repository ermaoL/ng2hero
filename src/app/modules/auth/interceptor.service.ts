import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export class Interceptor extends Subject<String>{
    constructor(){
      super();
    }
    emit(value) {
      super.next(value);
    }
}

@Injectable()
export class InterceptorService {

    beforeRequest: Interceptor;
    afterRequest: Interceptor;
    constructor(){
      this.beforeRequest = new Interceptor();
      this.afterRequest = new Interceptor();
    }

}
