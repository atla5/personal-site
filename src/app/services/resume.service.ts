import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {

  ENDPOINT_EXPERIENCE:string = "https://raw.githubusercontent.com/atla5/resume/master/experience.json";
  ENDPOINT_PROJECTS:string = "https://raw.githubusercontent.com/atla5/resume/master/projects.json";

  constructor(public http:Http) {
    console.log("ResumeService loaded...")
  }

  private getJSONDataFromEndpoint(endpoint:string){
    return this.http.get(endpoint)
      .map(res => res.json());
  }

  getJobs(){
    return this.getJSONDataFromEndpoint(this.ENDPOINT_EXPERIENCE);
  }

  getProjects(){
    return this.getJSONDataFromEndpoint(this.ENDPOINT_PROJECTS);
  }

  public resume_download_url:string = "https://github.com/atla5/resume/raw/master/build/Resume_Sawyer.pdf";
}

