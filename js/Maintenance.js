class Maintenance extends Company {

    workOrder = '';

    constructor (dateTime, fullName, idNumber, numberPlate, company, workOrder) {
        super(dateTime, fullName, idNumber, numberPlate, company);
        this.workOrder = workOrder;
    }

    get workOrder(){
        return this.workOrder;
    }

    render(html) {
        return html`
          <div>
            ${this.workOrder}
          </div>
        `
    }

}