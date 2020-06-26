import Display from '../Display';

export default abstract class OperationsButtons {
    display: HTMLInputElement;
    elements: NodeListOf<HTMLButtonElement>;

    constructor() {
        this.display = Display.display;
        this.elements = document.querySelectorAll('.operator')

        this.bind();
    }

    bind() {
        for (const element of this.elements) {
            element.addEventListener('click', () => this.calc())
        }
    }

    abstract calc(): any;
}