class Home extends Domer {

    //Visitorattribut.
    dateTime = '';
    fullName = '';
    idNumber = '';
    numberPlate = '';
    company = '';
    department = '';
    workOrder = '';
    relation = '';

    //Attribut till övriga funktioner.
    idNumberCheckOut = '';

    constructor(visitorList) {
        super();
        this.visitorList = visitorList;
    }


    /* Incheckningsfunktioner. */

    checkIn() {
        //Lägger till en tidsstämpel.
        this.dateTime = this.dateTimeToday();

        if (this.company != '' && this.department != '' && this.workOrder == '' && this.relation == '') {
            this.visitorList.addVisitor(new Business(this.dateTime, this.fullName, this.idNumber, this.numberPlate, this.company, this.department));

        }
        else if (this.company != '' && this.department == '' && this.workOrder != '' && this.relation == '') {
            this.visitorList.addVisitor(new Maintenance(this.dateTime, this.fullName, this.idNumber, this.numberPlate, this.company, this.workOrder))

        }
        else if (this.company == '' && this.department == '' && this.workOrder == '' && this.relation != '') {
            this.visitorList.addVisitor(new Personal(this.dateTime, this.fullName, this.idNumber, this.numberPlate, this.relation));
        }
        else {
            return;
        }

        /* Bekräftar incheckning */
        this.confirmCheckIn = `A visitor with ID number ${this.idNumber} has been checked in at ${this.dateTimeToday()}.`;

        /* Rensar inputfält. */
        this.fullName = '';
        this.idNumber = '';
        this.numberPlate = '';
        this.company = '';
        this.department = '';
        this.workOrder = '';
        this.relation = '';

    }

    /* Knappen är inaktiverad om fälten inte är ifyllda */
    checkInButtonControl() {

        if (this.fullName === '' || this.idNumber === '' || this.numberPlate === '') {
            return `disabled`;
        }
        else {
            return;
        }

    }

    /* Tömmer variabeln som bekräftar incheckning */
    removeCheckInConfirmation() {
        this.confirmCheckIn = '';
        this.noVisitorsMessage = '';
    }



    /* Utcheckningsfunktioner */
    checkOut() {
        this.visitorList.removeVisitor(this.idNumberCheckOut)
    }


    /* Knappen är inaktiverad om fältet inte är ifyllt */
    checkOutButtonControl() {
        if (this.idNumberCheckOut === '') {
            return `disabled`;
        }
        else {
            return;
        }
    }

    /* Tömmer variabeln som bekräftar utcheckning */
    removeCheckOutConfirmation() {
        this.confirmCheckOut = '';
        this.noVisitorsMessage = '';
    }

    /* Datum och tid */
    dateTimeToday() {
        let today = new Date();
        //Lägger till etta för att månader börjar på 0.
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        return dateTime;

    }

    render(html) {
        return html`
        <section>
        <form class="left">
        <input bind="fullName" placeholder="Full name*" click="removeCheckInConfirmation" type="text" ><br>
        <input bind="idNumber" placeholder="ID number*" click="removeCheckInConfirmation" type="text" pattern="[0-9]{6}-[0-9]{4}" required><br><br>
        <article id="businessMaintenance"><label>Business</label><label>Maintenance</label><br>
        <input type="checkbox" id="myCheck" bind="parkCar">
        <input type="checkbox" id="myCheck" bind="parkCar"></article><br><br>
        <input bind="company" placeholder="Company" click="removeCheckInConfirmation"><br>
        <input bind="department" placeholder="Department" click="removeCheckInConfirmation"><br>
        <input bind="workOrder" placeholder="Order" click="removeCheckInConfirmation"><br>
        <label>Private</label><br>
        <input type="checkbox" id="myCheck" bind="parkCar"><br>
        <input bind="relation" placeholder="Relation" click="removeCheckInConfirmation"><br>
        <label>Parking</label><br>
        <input type="checkbox" id="myCheck" bind="parkCar"><br>
        <input bind="numberPlate" placeholder="Number plate"  click="removeCheckInConfirmation" pattern="[A-Z]{3}[0-9]{3}" required><br><br>
        <button type="button" click="checkIn" class="checkInButton" ${this.checkInButtonControl()}>Check In</button><br><br>
        <button type="reset" class="clearButton">Clear</button><br><br>
        <p>${this.confirmCheckIn}</p>
        </form>
        <form class="right">
        <input bind="idNumberCheckOut" placeholder="ID number*" click="removeCheckOutConfirmation" type="text" pattern="[0-9]{6}-[0-9]{4}" required><br><br>
        <button type=button class="checkOutButton" click="checkOut" ${this.checkOutButtonControl()}>Check Out</button><br><br>
        <p>${this.confirmCheckOut}</p>
        </form>
        </section>
        `
    }

}