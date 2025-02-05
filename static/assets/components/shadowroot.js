class ShadowRootSearch extends HTMLElement {
    constructor(con) {
        super();
        this.con = con;
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');


        const container = document.createElement('div');
        container.innerHTML = `
            Pr<x>o</x>xy
        `;

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

customElements.define('shadow-root-search', ShadowRootSearch);
