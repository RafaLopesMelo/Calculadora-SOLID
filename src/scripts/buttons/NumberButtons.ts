import Display from '../Display';

export default class NumberButtons {
    display: HTMLInputElement;
    elements: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.display = Display.display;
        this.elements = document.querySelectorAll('.number');

        this.bind();
    }

    bind() {
        for(const element of this.elements) {
            element.addEventListener('click', () => this.addNumber(element.value))
        }
    }

    addNumber(value: string) {
        this.display.value = `${this.display.value}${value}`;
    }
}