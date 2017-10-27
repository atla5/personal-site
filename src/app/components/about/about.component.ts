import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string;
  objective:string;
  contact: {
    phone:string,
    email:string
  };
  website:string;
  accounts: {
    github:string,
    github_org:string,
    linkedin:string,
    librarything:string,
    twitter:string,
    academia_edu:string
  };
  github:string[] = ["",""];
  school:{
    name:string,
    degree:string,
    start:string,
    end:string,
    notes:string[]
  };
  jobs: {
    company_name:string,
    company_url:string,
    company_location:{
      city:string,
      state:string
    },
    advisor:{
      name:string,
      email:string,
      position:string
    },
    time_start:string,
    time_end:string,
    position:string,
    responsibilities:string[],
  }[];
  projects: {
    name:string,
    url_src:string,
    description_short:string,
    description_long:string
  }[];
  skills: {
    intermediate:string[],
    functional:string[],
    novice:string[]
  };


  constructor() { }

  ngOnInit() {
    console.log("initializing 'about' component");

    this.name = "Aidan Sawyer";
    this.objective = "\"I'm looking for meaningful work involved with the organization, preservation, and expansion of knowledge, with particular regard to library resources and scientific research. By improving the engines which power human understanding, I seek to expedite human progress long-term.";
    this.contact = {
      phone: "207.200.6026",
      email: "aks5238@rit.edu"
    };
    this.accounts = {
      github: "atla5",
      github_org: "lib-re",
      linkedin: "aidan-sawyer-8253a5a0",
      librarything: "aidan.keefe.s",
      twitter: "Aidan_KS",
      academia_edu: "AidanSawyer"
    };
    this.website = "https://" + this.accounts.github + ".github.io";
    this.school = {
      name: "Rochester Institute of Technology",
      degree: "BS in Software Engineering",
      start: "Aug 2012",
      end: "Aug 2018",
      notes: [
        "Minor in Philosophy, Application Domain in 'Library and Information Science'",
        "Worked on over a dozen 2-6 person teams, in as many languages/technologies, in the completion of project-heavy coursework, punctuated by meaningful work experience."
      ]
    };
    this.jobs = [
      {
        company_name: "ITHAKA - JSTOR",
        company_url: "http://ithaka.org",
        company_location: {
          city: "Ann Arbor",
          state: "MI"
        },
        advisor: {
          name: "Peter Vlahakis",
          email: "peter.vlahakis@ithaka.org",
          position: "Product Owner"
        },
        time_start: "Jan 2017",
        time_end: "Dec 2018",
        position: "Software Development Intern",
        responsibilities: [
          "Built, maintained, monitored, and improved upon a series of django applications constituting the new JSTOR 'For Librarians' portal within an agile, distributed, continuous deployment AWS environment.",
          "Took part in a distributed effort among front-end teams toward a site-wide visual redesign."
        ]
      }
    ];
    this.projects = [
      {
        name:"dublin-core-text-parser",
        url_src:"https://github.com/atla5/dublin-core-text-parser",
        description_short:"Easily encode dublin core metadata and convert into various formats.",
        description_long:"Assist in cataloguing batches of similar or series-based items from a collection by: decreasing the complexity of logging each individual item/issue, minimizing repetitive typing and template editing, and combining the information that is shared across items in a collection in one place"
      }
    ];
    this.skills = {
      intermediate:["java","python","html"],
      functional:["scss","C#","C"],
      novice:["js","AWS"]
    }
  }
}
