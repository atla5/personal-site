import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {

  PROJECTS_ENDPOINT:string = "https://raw.githubusercontent.com/atla5/resume/master/projects.json";

  constructor(public http:Http) {
    console.log("ResumeService loaded...")
  }

  getProjects(){
    return this.http.get(this.PROJECTS_ENDPOINT)
      .map(res => res.json());
  }

}
