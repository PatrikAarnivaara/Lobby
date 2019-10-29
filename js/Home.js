class Home extends Domer {

    //Visitorattribut.
    visitors = [];
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
    regExId = '[0-9]{6}-[0-9]{4}';

    constructor() {
        super();

    }


    /* Incheckningsfunktioner. */
    checkIn() {

        //Lägger till en tidsstämpel.
        this.dateTime = this.dateTimeToday();

        if (this.company != '' && this.department != '' && this.workOrder == '' && this.relation == '') {
            this.visitors.push(new Business(this.dateTime, this.fullName, this.idNumber, this.numberPlate, this.company, this.department));

        }
        else if (this.company != '' && this.department == '' && this.workOrder != '' && this.relation == '') {
            this.visitors.push(new Maintenance(this.dateTime, this.fullName, this.idNumber, this.numberPlate, this.company, this.workOrder))

        }
        else if (this.company == '' && this.department == '' && this.workOrder == '' && this.relation != '') {
            this.visitors.push(new Personal(this.dateTime, this.fullName, this.idNumber, this.numberPlate, this.relation));
        }
        else {
            return;
        }

        console.log(this.visitors);

        /* Rensar inputfält. */
        this.confirmCheckIn = `A visitor with ID number ${this.idNumber} has been checked in at ${this.dateTimeToday()}.`;
        this.fullName = '';
        this.idNumber = '';
        this.numberPlate = '';
        this.company = '';
        this.department = '';
        this.workOrder = '';
        this.relation = '';

    }

    checkInButtonControl() {

        if (this.fullName === '' || this.idNumber === '' || this.numberPlate === '') {
            return `disabled`;
        }
        else {
            return;
        }

    }

    removeCheckInConfirmation() {
        this.confirmCheckIn = '';
        this.noVisitorsMessage = '';
    }

    /* Print list of all info: name, number plate, ID number etc. */
    getCompleteVisitorList() {
        let completeVisitorList = '';
        for (let visitor of this.visitors) {
            completeVisitorList += `
            <div>${visitor.dateTime} </div> 
            <div>${visitor.fullName} </div>
            <div>${visitor.idNumber} </div>
            <div>${visitor.numberPlate} </div>
            <div>${visitor.company} </div> 
            <div>${visitor.department} </div>
            <div>${visitor.workOrder} </div>
            <div>${visitor.relation} </div>    
          `
        }
        return completeVisitorList;
    }

    showCompleteList() {
        if (this.visitors.length === 0) {
            this.noVisitorsMessage = `There are no visitors in the building.`;
        }
        else {
            this.printListOfVisitors = `Visitors in the building are: ${this.getCompleteVisitorList()}`;
        }
        for (let visitor of this.visitors) {
            console.log(`Date and time: ${this.dateTimeToday()} Full name: ${visitor.fullName} ID number: ${visitor.idNumber}
                        Number plate: ${visitor.numberPlate}`);
        }

    }

    /* Print list of checked in cars. */
    showCars() {
        if (this.visitors.length === 0) {
            this.noCarsMessage = `There are no cars in the garage.`;
        }
        else {
            this.printListOfCars = `Cars in the garage are: ${this.getCars()}`;
        }
        for (let visitor of this.visitors) {
            console.log(`Number plate: ${visitor.numberPlate}`);

        }
    }

    /* Utcheckningsfunktioner */
    checkOut() {

        for (let i = 0; i < this.visitors.length; i++) {
            if (this.idNumberCheckOut == this.visitors[i].idNumber) {
                this.confirmCheckOut = `A visitor with ID number ${this.idNumberCheckOut} has been checked out at ${this.dateTimeToday()}.`;
                this.visitors.splice(i, 1);
                this.idNumberCheckOut = '';
                break;
            }
            else {
                this.confirmCheckOut = `The ID number ${this.idNumberCheckOut} does not exist in the list.`;
                this.idNumberCheckOut = '';
            }
        }
        console.log(this.visitors);
    }

    checkOutButtonControl() {
        if (this.idNumberCheckOut === '') {
            return `disabled`;
        }
        else {
            return;
        }
    }

    removeCheckOutConfirmation() {
        this.confirmCheckOut = '';
        this.noVisitorsMessage = '';
    }

    /* Date and time */
    dateTimeToday() {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();//Lägger till etta för att månader börjar på 0.
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        return dateTime;

    }

    /* Regex */
    /* let regExIdNumber = /^[0-9]{6}-\d{4};
        console.log(this.matcherIdNumber(this.idNumberCheckOut, regExIdNumber)); */
    matcherIdNumber(checkIdNumber, regex) {
        return checkIdNumber.match(regex);
    }

    /* enableParking() {
        if (this.parkCar.checked === true) {
            return;
        } else {
            return `disabled`;
        }
    } 
    ${this.enableParking()}
    */

    /* checkCheckBox() {

      if (this.checkBoxEnabled.checked === true) {
          return `disabled`;
      } else {
          return;
      } 

  } 
  ${this.checkCheckBox()}
  */


    render(html) {
        return html`
        <section>
        <form class="left">
        <input bind="fullName" placeholder="Full name*" click="removeCheckInConfirmation" type="text" pattern="[A-Z]{1}[a-z]{1,}[A-Z]{1}[a-z]{1,}" required><br>
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
        <input bind="idNumberCheckOut" placeholder="ID number*" click="removeCheckOutConfirmation"><br><br>
        <button type=button class="checkOutButton" click="checkOut" ${this.checkOutButtonControl()}>Check Out</button><br><br>
        <p>${this.confirmCheckOut}</p>
        <p>${this.getCompleteVisitorList()}</p>
        </form>
        </section>
        `
    }

}