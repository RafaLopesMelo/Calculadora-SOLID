import Display from '../Display';

export default class NumberOperatorButtons {
    display: HTMLInputElement;
    elements: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.display = Display.display;
        this.elements = document.querySelectorAll('.general');

        this.bind();
    }

    bind() {
        for (const element of this.elements) {
            element.addEventListener('click', () => this.addValueToCalculatorDisplay(element.value))
        }
    }

    addValueToCalculatorDisplay(value: string) {
        if (Display.display.value.length < 15) {
            this.display.value = `${this.display.value}${value}`;
        }
    }
}