import {Injectable} from '@angular/core';
import {AuthHttp} from "../auth";
import {tagUrl} from "./api";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TagService {

  private tagUrl = tagUrl;
  constructor(private http: AuthHttp) {
  }


  getAllTags(): Promise<any> {
    return this.http.get(this.tagUrl).toPromise().then(response=>{
      return response.json();
    }).catch(err=>{
      console.log(err);
    })
  }

  getTagsTree(): Promise<any> {
    return this.http.get(this.tagUrl + '/tree').toPromise().then(response=>{
      return response.json();
    }).catch(err=>{
      console.log(err);
    })
  }

  addTag(newTag){
    return this.http.post(this.tagUrl, {name: newTag}).toPromise().then(response=>{
      return response.json();
    }).catch(err=>{
      console.log(err);
    })
  }
}
