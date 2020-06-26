class Display {
    public display: HTMLInputElement;

    constructor() {
        this.display = document.querySelector('#display') as HTMLInputElement;
    }
}

export default new Display();