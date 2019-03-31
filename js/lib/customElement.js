export function createTemplateContent(tString) {
  const templateElement = document.createElement('template');
  templateElement.innerHTML = tString;
  return templateElement.content; //.cloneNode(true);
}

export default class CustomElement extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    // const shadow = this.attachShadow({mode: 'close'});
    const template = document.createElement('template');
    const style = `<style>${this._style()}</style>`;
    shadow.appendChild(createTemplateContent(style + this._render()));
    this._onMount();
  }

  _onMount() {

  }
}
