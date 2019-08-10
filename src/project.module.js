import {LitElement, html} from 'lit-element';

class ProjectDisplay extends (LitElement){

  static get properties(){
    return {
      data: {type: String},
      verbose: {type: Boolean}
    }
  }

  render(){
    if(!this.data){ return html``; }
    else{
      let data = JSON.parse(this.data);
      let project_name = data.name;
      let website = data.url_web;
      let language_list = data.languages.join(",");
      let tag_list = data.tags.join(",");
      let content = this.verbose
        ? html`
          <strong><a href="${website}">${project_name}</a></strong>
          <span class="right">${data.description_short}</span>
        `
        : html`
          <strong><a target="_blank" href="${website}">${project_name}</a></strong>:
          <span class="phm">${data.description_short}</span>
          <p>${data.description_long}</p>
          <div>
            <strong>languages:</strong> ${language_list}
            <span class="phm">|</span>
            <strong>tags:</strong>${tag_list}
          </div>
        `; 
      return html`<div class="project>${content}</div>`;
    }
  }

}

customElements.define('atla5-project', ProjectDisplay)