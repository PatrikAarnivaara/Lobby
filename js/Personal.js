class Personal extends Visitor {

    personal = '';

    constructor(dateTime, fullName, idNumber, personal) {
        super(dateTime, fullName, idNumber);
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