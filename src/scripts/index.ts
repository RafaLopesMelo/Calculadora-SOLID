import NumberOperatorButtons from './buttons/NumberOperatorButtons';
import ResetButtons from './buttons/ResetButtons';
import EqualButton from './buttons/EqualButton';
import Percent from  './buttons/PercentButton';

class Calculator {
    constructor() {
        new ResetButtons();
        new NumberOperatorButtons();
        new Percent();
        new EqualButton();
    }
}

new Calculator();
