class Business extends Visitor {

    department = '';

    constructor (dateTime, fullName, idNumber, department) {
        super(dateTime, fullName, idNumber);
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