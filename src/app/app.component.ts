import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
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

  ngOnInit(){
    this.name = "Aidan Sawyer";
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
  }

}

