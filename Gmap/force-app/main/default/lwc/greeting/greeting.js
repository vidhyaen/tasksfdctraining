import { LightningElement } from 'lwc';

export default class Greeting extends LightningElement {
    greeting="world";
    changeHandler(event)
    {
        this.greeting=event.target.value;
    }
    clickHandler(event)
    {
        alert("Thank you");
    }
}