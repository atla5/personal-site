import {render, html} from 'https://unpkg.com/lit-html@1.1.1/lit-html?module';

// store urls for grabbing data from atla5/resume
const url_base_data = "https://raw.githubusercontent.com/atla5/resume/master/data/";

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
getDataFromJSONFileAndCallRenderFunction(school_url, renderEducation);
let temp_education = (school) => html`
<div class="education">
  <span class="underline">${school.school_name}</span>:  ${school.degree} in ${school.major}
  <em class="right">${school.time_start} - ${school.time_end}</em>
  <ul>${school.notes.map((note) => html`<li>${note}</li>`)}</ul>
</div>`;

async function renderEducation(schools){
  render(temp_education(schools[0]), document.getElementById("education"));
}


/* -- EXPERIENCE -- */
let jobs_url = url_base_data+"experience.json";
getDataFromJSONFileAndCallRenderFunction(jobs_url, renderJobs);
const job_template = (job) => html`
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
  </li>`;
const jobsTemplate = (jobs) => 
  html`<ul>${jobs.map((job) => job_template(job))}</ul>`;

async function renderJobs(jobs){
  render(jobsTemplate(jobs.slice(0,3)), document.getElementById("jobs"));
};


/* -- PROJECTS (resume) -- */
let projects_url = url_base_data+"projects.json";
getDataFromJSONFileAndCallRenderFunction(projects_url, renderProjects);
const temp_project = (project) => html`
  <li>
    <strong><a href="${project.url_src}">${project.name}</a></strong>
    <span class="right">${project.description_short}</span>
  </li>`;
const temp_projects = (projects) => 
  html`<ul>${projects.map((project) => temp_project(project))}</ul>`;

async function renderProjects(projects){
  render(temp_projects(projects.slice(0,4)), document.getElementById("projects-resume"));
}


/* -- PROJECT (detail) -- */
getDataFromJSONFileAndCallRenderFunction(projects_url, renderProjectsDetail);
const temp_project_detail = (project) => html`
  <li>
    <strong><a href="${project.url_src}" target="_blank">${project.name}</a></strong>:
    <span class="phm">${project.description_short}</span>
    <p>${project.description_long}</p>
    <div>
      <strong>languages:</strong> ${project.languages.join(', ')}
      <span class="phm">|</span>
      <strong>tags:</strong> ${project.tags.join(', ')}
    </div>
    <hr />
  </li>`;
  const temp_projects_detail = (projects) => 
    html`<ul>${projects.map((project) => temp_project_detail(project))}</ul>`;
  async function renderProjectsDetail(projects){
    render(temp_projects_detail(projects.slice(0,8)), document.getElementById("projects-detail"));
  }


/* -- SKILLS -- */
let skills_url = url_base_data+"additional.json";
getDataFromJSONFileAndCallRenderFunction(skills_url, renderSkills);

const temp_languages = (novice, functional, intermediate) => html`
  <ul>
    <li><strong>Intermediate</strong><span>${intermediate.join(", ")}</span></li>
    <li><strong>Functional</strong><span>${functional.join(", ")}</span></li>
    <li><strong>Novice</strong><span>${novice.join(", ")}</span></li>
  </ul>
`;

// parse skills.json into languages ()
async function renderSkills(skills_json){
  let novice = []; let functional = []; let intermediate = [];
  let languages = skills_json['languages'];
  let lang = {}; let prof = name = "";
  for(let i=0; i<languages.length; i++){
    lang = languages[i]; 
    prof = lang['proficiency'].toLowerCase(); 
    name = lang['name'];
    if(prof.includes("nov")){ novice.push(name); }
    else if(prof.includes("inter")){ intermediate.push(name); }
    else if(prof.includes("func")){ functional.push(name); }
  }

  render(temp_languages(novice, functional, intermediate), document.getElementById("skills"));
}


/* -- PRESENTATIONS -- */
let presentations_url = "https://raw.githubusercontent.com/atla5/resume/presentations/data/"+"presentations.json";
getDataFromJSONFileAndCallRenderFunction(presentations_url, renderTalks);
const temp_talk = (talk) => html`
  <li>
    <div style="display: flex; flex-wrap: wrapped;">
      <iframe class="pal" width="450" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" 
        src="https://docs.google.com/presentation/d/e/2PACX-1vTEFVU1iY8Uz0EY1jAzwJaXuUNJwEGLpLTozAWOiPd-t_PBb6P7Z-NabxS5rr1u4yf0CLWmeJg3fDvk/embed"></iframe>
      <div class="pll txtv">
        <h3 class="mbm">${talk.title} [<a target="_blank" href="https://docs.google.com/presentation/d/${talk.slides_id}/edit?usp=sharing">slides</a>]</h3>
        <em class="pbl">${talk.subtitle}</em>
        <p>${talk.description}</p>
        <div>
          <strong><a href="${talk.conference_url}">${talk.conference_name}</a></strong> - 
          <span>${humanize_date(talk.date)}</div>
        </div>
      </div>
    </div>
  </li><hr />`;
const temp_talks = (talks) => html`<ul class="no-bullet"><hr />${talks.map((talk) => temp_talk(talk))}</ul>`;
async function renderTalks(presentations){
  render(temp_talks(presentations), document.getElementById("talks-list"));
}


/* -- HELPERS -- */


/* humanize dates from '2020-03-23' to 'March 3, 2020' */
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function humanize_date(yyyy_mm_dd){
  if(yyyy_mm_dd.indexOf('-') == -1){ return yyyy_mm_dd; }
  else{
    let tokens = yyyy_mm_dd.split('-')
    let year = tokens[0];
    let month = parseInt(tokens[1]);
    let day = tokens[2];

    return `${months[month-1]} ${day}, ${year}`;
  }
}


/* enable setting of active tab via the a '?page=' search paramater */
if(window.location.search.includes("page=")){
  let startIndex = window.location.search.indexOf("page=") + "page=".length;
  let pageName = window.location.search.substring(startIndex);
  let inputToSetChecked = document.querySelector(`.tabs > input[id='${pageName}']`) || document.querySelector(`.tabs > input`);
  inputToSetChecked.checked = true;
}

/* ensure page reload preserves currently selected tab (track selected tab with '?page=' search param) */
let tabInputs = document.querySelectorAll('.tabs > input');
for(let i=0; i<tabInputs.length; i++){
  tabInputs[i].addEventListener('click', (ev) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", ev.target.id || "");
    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
  }
)};