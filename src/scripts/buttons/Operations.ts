export class Sum {
    sumButton: HTMLButtonElement;

    constructor() {
        this.sumButton = document.querySelector('#sum') as HTMLButtonElement;
        this.sumButton.addEventListener('click', () => this.calc());
    }

    calc() {
        // const result = this.number1 + this.number2;
        alert('Sum Btn')
    }
}

export class Sub {
    subButton: HTMLButtonElement;

    constructor() {
        this.subButton = document.querySelector('#sub') as HTMLButtonElement;
        this.subButton.addEventListener('click', () => this.calc());
    }

    calc() {
        // const result = this.number1 - this.number2;
        alert('Sub Btn')
    }
}

export class Mult {
    multButton: HTMLButtonElement;

    constructor() {
        this.multButton = document.querySelector('#mult') as HTMLButtonElement;
        this.multButton.addEventListener('click', () => this.calc());
    }

    calc() {
        // const result = this.number1 * this.number2;
        alert('Mult Btn')
    }
}

export class Div {
    divButton: HTMLButtonElement;

    constructor() {
        this.divButton = document.querySelector('#div') as HTMLButtonElement;
        this.divButton.addEventListener('click', () => this.calc());
    }

    calc() {
        // const result = this.number1 / this.number2;
        alert('Div Btn')
    }
}

export class Percent {
    percentButton: HTMLButtonElement;

    constructor() {
        this.percentButton = document.querySelector('#percent') as HTMLButtonElement;
        this.percentButton.addEventListener('click', () => this.calc());
    }

    calc() {
        alert('Percent Btn')
    }
}