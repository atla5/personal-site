import {LitElement, html} from 'https://unpkg.com/lit-element@2.2.1/lit-element.js';

export default class BULHello extends LitElement {
    constructor(){ 
        this.name = "earth";
    }

    static get properties() {
        return {
            name: {type: String},
        }
    }

    render(){ return html`hello, ${this.name}`}
}
window.customElements.define("bulib-hello", BULHello);
