import { Component, OnInit } from '@angular/core';
import { ResumeService } from "../../services/resume.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  name:string;
  url_resume_download:string;
  objective:string;
  schools:School[];
  jobs: Job[];
  projects:Project[];
  skills: {
    intermediate:string[],
    functional:string[],
    novice:string[]
  };

  constructor(private resumeService:ResumeService) {}

  ngOnInit() {
    console.log("initializing 'about' component");

    this.objective = "I'm looking for meaningful work involved with the organization, preservation, and expansion of knowledge, with particular regard to library resources and scientific research. By improving the engines which power human understanding, I seek to expedite human progress long-term.";
    this.skills = {
      intermediate:["java","python","html"],
      functional:["scss","C#","C"],
      novice:["js","AWS"]
    };

    this.resumeService.getSchools().subscribe( (_schools:School[]) => {
      this.schools = _schools;
    });

    this.resumeService.getProjects().subscribe((_projects) => {
      this.projects = _projects;
    });

    this.resumeService.getJobs().subscribe( (_jobs) => {
      this.jobs = _jobs;
    });

    this.url_resume_download = this.resumeService.resume_download_url;
  }
}


interface Project {
  name:string,
  url_src:string,
  description_short:string,
  description_long:string,
}

interface Job {
  company_name:string,
  company_url:string,
  location_city:string,
  location_state:string,
  advisor_name:string,
  advisor_contact:string,
  advisor_position:string,
  time_start:string,
  time_end:string,
  position:string,
  responsibilities:string[]
}

interface School {
  school_name:string,
  degree:string,
  major:string,
  time_start:string,
  time_end:string,
  notes:string[]
}
