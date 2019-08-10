import {LitElement, html} from 'lit-element';

class HelloWorld extends LitElement {
  render(){
    return html`<h1>Hello World</h1>`;
  }
}
customElements.define('hello-world', HelloWorld);