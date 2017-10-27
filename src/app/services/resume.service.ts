import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeService {

  private base_service_endpoint:string  = "https://raw.githubusercontent.com/atla5/resume/master/";
  private ENDPOINT_EDUCATION:string     = this.base_service_endpoint + "education.json";
  private ENDPOINT_EXPERIENCE:string    = this.base_service_endpoint + "experience.json";
  private ENDPOINT_PROJECTS:string      = this.base_service_endpoint + "projects.json";

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

  getSchools(){
    return this.getJSONDataFromEndpoint(this.ENDPOINT_EDUCATION);
  }

  public resume_download_url:string = "https://github.com/atla5/resume/raw/master/build/Resume_Sawyer.pdf";
}

