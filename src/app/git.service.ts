import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { environment} from '../environments/environment';
import  'rxjs/add/operator/map';
@Injectable()
export class GitService {
  private username:string;
  private name:any;

  constructor(private http:Http) {
    console.log("service is now ready");
    this.username = '';
    // this.name='Anitas-Kitchen';
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username+"?/access_token/=" + environment.access_token)
    .map(res => res.json());
  }
  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.username+"/repos?/access_token/=" + environment.access_token)
    .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }
}

  // getRepo(){
  //   return this.http.get("https://api.github.com/repos/" + this.username + this.name +"?/access_token=" + environment.access_token
  //   .map(res => res.json()));
  //
  // }
