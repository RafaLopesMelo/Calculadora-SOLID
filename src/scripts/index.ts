import NumberButtons from './buttons/NumberButtons';
import ResetButtons from './buttons/ResetButtons';

import { Sum, Sub, Mult, Div, Percent } from  './buttons/Operations';

class Calculator {
    constructor() {
        new NumberButtons();
        new ResetButtons();
        new Sum();
        new Sub();
        new Mult();
        new Div();
        new Percent();
    }
}

new Calculator();
