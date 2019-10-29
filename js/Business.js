class Business extends Company {

    department = '';

    constructor (dateTime, fullName, idNumber, numberPlate, company, department) {
        super(dateTime, fullName, idNumber, numberPlate, company);
        this.department = department;
    }

    get department(){
        return this.department;
    }

    render(html) {
        return html`
          <div>
          ${this.department}
          </div>
        `
    }

}