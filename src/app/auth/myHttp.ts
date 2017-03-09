import { Injectable } from '@angular/core';
import {Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {TokenService} from "./token.service";
import { InterceptorService } from './interceptor.service';
@Injectable()
export class myHttp extends Http{


  protected _backend: ConnectionBackend;
  protected _defaultOptions: RequestOptions;
  protected _interceptor: InterceptorService;
  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, private _tokenService: TokenService, _interceptor: InterceptorService){
    super(_backend, _defaultOptions);
    this._interceptor = _interceptor;
  };
  /**
   * Performs any type of http request. First argument is required, and can either be a url or
   * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
   * object can be provided as the 2nd argument. The options object will be merged with the values
   * of {@link BaseRequestOptions} before performing the request.
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.interceptor(super.request(url, options));
  };
  /**
   * Performs a request with `get` http method.
   */
  get(url: string, options?: RequestOptionsArgs): Observable<Response>{
    return this.interceptor(super.get(url, this.mergeOptions(options)));
  };
  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.interceptor(super.post(url, body, this.mergeOptions(options)));
  };
  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.interceptor(super.put(url, body, options));
  };
  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.interceptor(super.delete(url, options));
  };
  /**
   * Performs a request with `patch` http method.
   */
  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
    return this.interceptor(super.patch(url, body, options));
  };
  /**
   * Performs a request with `head` http method.
   */
  head(url: string, options?: RequestOptionsArgs): Observable<Response>{
    return this.interceptor(super.head(url, options));
  };
  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?: RequestOptionsArgs): Observable<Response>{
    return this.interceptor(super.options(url, options));
  };

  interceptor(observable: Observable<Response>) : Observable<Response> {
    return Observable.create((observer)=>{

      this._interceptor.beforeRequest.emit("开始啦");

      observable.subscribe(res => {
        console.log('获取到数据');
        console.log(res);
        this._interceptor.afterRequest.emit("结束");
        observer.next(res);
      }, (err) => {
        console.log('错误啦');
        this._interceptor.afterRequest.emit("结束");

        observer.error(err);
      }, ()=> {
        console.log('完成啦');
        this._interceptor.afterRequest.emit("结束");

        observer.complete();
      })
    });
  }

  mergeOptions(options?: RequestOptionsArgs): RequestOptionsArgs{
      if(options == null) {
        options = new RequestOptions();
      }
      if(options.headers == null) {
        options.headers = new Headers();
      }
      let token = this._tokenService.getToken();
      options.headers.append('Content-Type', 'application/json');
      options.headers.append('token', token && token.token || '');

      return options;
  }

}
