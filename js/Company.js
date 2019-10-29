class Company extends Visitor {

    company = '';

    constructor (dateTime, fullName, idNumber, numberPlate, company) {
        super(dateTime, fullName, idNumber, numberPlate);
        this.company = company;
    }

    get company(){
        return this.company;
    }

    render(html) {
        return html`
          <div>
            ${this.company}
          </div>
        `
    }
}