import {html} from 'lit-html/lit-html';

export const temp_education = html`
  <div class="education">
    <span class="underline">${school_name}</span>:  ${degree} in ${major}
    <em class="right">${time_start} - ${time_end}</em>
    <ul>${notes.map((note) => html`<li>${note}</li>`)}</ul>
  </div>`;

export const temp_project = html`
  <strong><a href="${project.url_src}">${project.name}</a></strong>
  <span class="right">${project.description_short}</span>`;

export const temp_project_detail = html`
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

export const temp_experience = html`
  <div>
    <strong><span class="underline">${job.company_name}</span>: {job.position}</strong>
    <em class="right">${job.time_start} - ${job.time_end}</em>
  </div>
  <div>
    <em>${job.advisor_name} - ${job.advisor_position} - 
      <a href="mailto:${job.advisor_contact}">${job.advisor_contact}</a>
    </em>
    <ul>${job.responsibilities.map((note) => html`<li>${note}</li>`)}</ul>
  </div>`;



