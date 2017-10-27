import { Component, OnInit } from '@angular/core';
import { ResumeService } from "../../services/resume.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[];

  constructor(private resumeService:ResumeService) { }

  ngOnInit() {
    this.resumeService.getProjects().subscribe((_projects:Project[]) => {
      this.projects = _projects;
    });
  }

  toggleDescription(){

  }

}

interface Project {
  name:string,
  url_src:string,
  languages:string[],
  tags:string[],
  description_short:string,
  description_long:string,
  importance:string,
  involvement:string
}
