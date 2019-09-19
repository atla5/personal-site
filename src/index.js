import {render, html} from 'https://unpkg.com/lit-html/lit-html?module';

// store urls for grabbing data from atla5/resume
const cors_prefix = 'https://cors-anywhere.herokuapp.com/';
const url_base_data = cors_prefix+"https://raw.githubusercontent.com/atla5/resume/master/data/";

// generic helper function used to grab the data 
function getDataFromJSONFileAndCallRenderFunction(data_url, renderFunction) {
  return fetch(data_url)
    .then((resp) => resp.json())
    .then((json) => renderFunction(json))
    .catch(function(error) {
      console.log(error)
      console.log(JSON.stringify(error));
    }
  );
}


/* --  EDUCATION -- */
let school_url = url_base_data+"education.json";
getDataFromJSONFileAndCallRenderFunction(school_url, renderSchoolsIntoEducationSection);
let temp_education = (school) => html`
<div class="education">
  <span class="underline">${school.school_name}</span>:  ${school.degree} in ${school.major}
  <em class="right">${school.time_start} - ${school.time_end}</em>
  <ul>${school.notes.map((note) => html`<li>${note}</li>`)}</ul>
</div>`;

async function renderSchoolsIntoEducationSection(schools){
  render(temp_education(schools[0]), document.getElementById("education"));
}


/* -- EXPERIENCE -- */
let jobs_url = url_base_data+"experience.json";
getDataFromJSONFileAndCallRenderFunction(jobs_url, renderJobsIntoJobsSection);
let job_template = (job) => html`
  <li class="pbl">
    <div>
      <strong><span class="underline">${job.company_name}</span>: ${job.position}</strong>
      <em class="right">${job.time_start} - ${job.time_end || "present"}</em>
    </div>
    <div>
      <em>${job.advisor_name} - ${job.advisor_position} - 
        <a href="mailto:${job.advisor_contact}">${job.advisor_contact}</a>
      </em>
      <ul>${job.responsibilities.map((note) => html`<li>${note}</li>`)}</ul>
    </div>
  </li>
`;
let jobsTemplate = (jobs) => html`<ul>${jobs.map((job) => job_template(job))}</ul>`;

async function renderJobsIntoJobsSection(jobs){
  render(jobsTemplate(jobs.slice(0,3)), document.getElementById("jobs"));
};

