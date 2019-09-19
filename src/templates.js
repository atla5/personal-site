import {html} from 'lit-html';

export const temp_project = (project) => html`
  <strong><a href="${project.url_src}">${project.name}</a></strong>
  <span class="right">${project.description_short}</span>`;

export const temp_project_detail = (project) => html`
  <div class="container">
    <strong><a href="${project.url_src}" target="_blank">${project.name}</a></strong>:
    <span class="phm">${project.description_short}</span>
    <p>${project.description_long}</p>
    <div>
      <strong>languages:</strong> ${project.languages}
      <span class="phm">|</span>
      <strong>tags:</strong> ${project.tags}
    </div>
    <hr />
  </div>`;



