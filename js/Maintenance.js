class Maintenance extends Visitor {

    workOrder = '';

    constructor (dateTime, fullName, idNumber, workOrder) {
        super(dateTime, fullName, idNumber);
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