import { Injectable } from '@angular/core';
import {Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {TokenService} from "./token.service";
import { InterceptorService } from './interceptor.service';
@Injectable()
export class AuthHttp extends Http{


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
    return super.request(url, this.mergeOptions(options));
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
    return this.interceptor(super.put(url, body, this.mergeOptions(options)));
  };
  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.interceptor(super.delete(url, this.mergeOptions(options)));
  };
  /**
   * Performs a request with `patch` http method.
   */
  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
    return this.interceptor(super.patch(url, body, this.mergeOptions(options)));
  };
  /**
   * Performs a request with `head` http method.
   */
  head(url: string, options?: RequestOptionsArgs): Observable<Response>{
    return this.interceptor(super.head(url, this.mergeOptions(options)));
  };
  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?: RequestOptionsArgs): Observable<Response>{
    return super.options(url, this.mergeOptions(options));
  };

  interceptor(observable: Observable<Response>) : Observable<Response> {
    return Observable.create((observer)=>{

      this._interceptor.beforeRequest.emit("开始请求数据");

      observable.subscribe(res => {
        this._interceptor.afterRequest.emit("成功啦");
        if(!res.json().success){
          alert(res.json().message);
        }
        observer.next(res);
      }, (err) => {
        if(!err.json().success){
          alert(err.json().message);
        }
        this._interceptor.afterRequest.emit("出错啦");
        observer.error(err);
      }, ()=> {
        this._interceptor.afterRequest.emit("请求结束");
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
