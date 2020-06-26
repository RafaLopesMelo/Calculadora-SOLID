import Display from '../Display';

export default class Percent {
    percentButton: HTMLButtonElement;

    constructor() {
        this.percentButton = document.querySelector('#percent') as HTMLButtonElement;
        this.percentButton.addEventListener('click', () => this.calculate());
    }

    calculate() {
        const count = Display.display.value
            .replace('×', '*')
            .replace('÷', '/');
        
        const result = eval(count) / 100;
        Display.display.value = String(result);
    }
}