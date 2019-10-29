class Personal extends Visitor {

    personal = '';

    constructor(dateTime, fullName, idNumber, numberPlate, personal) {
        super(dateTime, fullName, idNumber, numberPlate);
        this.personal = personal;
    }

    get personal(){
        return this.personal;
    }

    render(html) {
        return html`
          <section>
             ${this.personal}
          </section>
        `
    }

}