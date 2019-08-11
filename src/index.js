import {render} from 'lit-html';

// job experience
import {data_job} from './services.js';
import {temp_experience} from './templates.js';
render(temp_experience(data_job), document.getElementById("jobs"));
