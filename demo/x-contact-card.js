class ContactCard extends HTMLElement{
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['name', 'phone'];
    }

    attributeChangedCallback(attr, old, value) {
        console.log(attr, value);
        this.innerHTML += `<h1> ${attr} - ${value}</h1>`
    }
}

customElements.define('x-contact-card', ContactCard);

//webcomponent moze byc uzyty i w angularze i w reactcie
