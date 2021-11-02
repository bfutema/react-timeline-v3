type IOption = {
  targetElement: HTMLElement;
  position: string;
};

export default class Popup {
  private parent!: HTMLElement;

  private customHTML: string;

  private title!: HTMLElement | null;

  private subtitle!: HTMLElement | null;

  private pointer!: HTMLElement | null;

  constructor(parent: HTMLElement, customHTML: string) {
    this.parent = parent;
    this.customHTML = customHTML;
    this.make();
  }

  make() {
    this.parent.innerHTML = `
      <div class="title"></div>
      <div class="subtitle"></div>
      <div class="pointer"></div>
    `;

    this.hide();

    this.title = this.parent.querySelector<HTMLElement>('.title');
    this.subtitle = this.parent.querySelector<HTMLElement>('.subtitle');
    this.pointer = this.parent.querySelector<HTMLElement>('.pointer');
  }

  show(options: IOption) {
    if (!options.targetElement) {
      throw new Error('targetElement is required to show popup!');
    }

    if (!options.position) options.position = 'left';

    const target_element = options.targetElement;

    if (this.customHTML) {
      // let html = this.customHTML();
    }
  }

  hide() {
    this.parent.style.opacity = String(0);
  }
}
