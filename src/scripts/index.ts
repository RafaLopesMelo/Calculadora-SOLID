import NumberButtons from './buttons/NumberButtons';
import ResetButtons from './buttons/ResetButtons';

import { Sum, Sub, Mult, Div } from  './Operations';

class Calculator {
    constructor() {
        new NumberButtons();
        new ResetButtons();
    }
}

new Calculator();
