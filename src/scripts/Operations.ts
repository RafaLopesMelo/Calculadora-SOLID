import OperationsButtons from "./buttons/AbstractOperationsButtons";

export class Sum extends OperationsButtons {
    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        super();
        this.number1 = number1;
        this.number2 = number2;
    }

    calc() {
        const result = this.number1 + this.number2;
    }
}

export class Sub extends OperationsButtons {
    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        super();
        this.number1 = number1;
        this.number2 = number2;
    }

    calc() {
        const result = this.number1 - this.number2;
    }
}

export class Mult extends OperationsButtons{
    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        super();
        this.number1 = number1;
        this.number2 = number2;
    }

    calc() {
        const result = this.number1 * this.number2;
    }
}

export class Div extends OperationsButtons{
    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        super();
        this.number1 = number1;
        this.number2 = number2;
    }

    calc() {
        const result = this.number1 / this.number2;
    }
}