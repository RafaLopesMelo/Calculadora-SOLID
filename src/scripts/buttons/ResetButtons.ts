import Display from '../Display';

export default class ResetButtons {
    display: HTMLInputElement;
    CButton: HTMLButtonElement;
    ACButton: HTMLButtonElement;

    constructor() {
        this.display = Display.display;
        this.CButton = document.querySelector('#c') as HTMLButtonElement;
        this.ACButton = document.querySelector('#ac') as HTMLButtonElement;

        this.bind();
    };

    bind() {
        this.CButton.addEventListener('click', () => this.cancelEntry());
        this.ACButton.addEventListener('click', () => this.allClear());
    };

    cancelEntry() {
        this.display.value = this.display.value.slice(0, -1);
    };

    allClear() {
        this.display.value = '';
    };
}