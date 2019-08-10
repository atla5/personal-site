import {html, render} from 'lit-html';

const temp_hello = (data) => html`<h1>Hello, ${data.world}</h1>`;
render(temp_hello({world: 'earth'}), document.querySelector("#hello-world"));

console.log("hello world");