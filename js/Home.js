class Home extends Domer {

    //Visitorattribut.
    dateTime = '';
    fullName = '';
    idNumber = '';
    department = '';
    workOrder = '';
    relation = '';
    regExNumberPlate = "[A-Z]{3}[0-9]{3}";
    disableEnableDeptField = 'disabled';
    disableEnableWorkOrderField = 'disabled';
    disableEnablePersonalField = 'disabled';

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

        if (this.department != '' && this.workOrder == '' && this.relation == '') {
            this.visitorList.addVisitor(new Business(this.dateTime, this.fullName, this.idNumber, this.department));

        }
        else if (this.department == '' && this.workOrder != '' && this.relation == '') {
            this.visitorList.addVisitor(new Maintenance(this.dateTime, this.fullName, this.idNumber, this.workOrder))

        }
        else if (this.department == '' && this.workOrder == '' && this.relation != '') {
            this.visitorList.addVisitor(new Personal(this.dateTime, this.fullName, this.idNumber, this.relation));
        }
        else {
            return;
        }

        /* Bekräftar incheckning */
        this.confirmCheckIn = `A visitor with ID number ${this.idNumber} has been checked in.`;

        /* Rensar inputfält. */
        this.fullName = '';
        this.idNumber = '';
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

    enableDepartmentField() {
        this.disableEnableDeptField = '';
        this.disableEnableWorkOrderField = 'disabled';
        this.disableEnablePersonalField = 'disabled';
    }

    enableWorkOrderField() {
        this.disableEnableDeptField = 'disabled';
        this.disableEnableWorkOrderField = '';
        this.disableEnablePersonalField = 'disabled';
    }

    enablePersonalField() {
        this.disableEnableDeptField = 'disabled';
        this.disableEnableWorkOrderField = 'disabled';
        this.disableEnablePersonalField = '';
    }


    render(html) {
        return html`
        <section>
        <form class="top">
        <input bind="fullName" placeholder="Firstname Lastname*" click="removeCheckInConfirmation" type="text" ><br>
        <input bind="idNumber" placeholder="YYMMDD-NNNN*" click="removeCheckInConfirmation" type="text" pattern="[0-9]{6}-[0-9]{4}" required><br><br>
        <fieldset>
        <legend>Reason for visit</legend>
        <input type="radio" id="business" name="reason" click="enableDepartmentField" >
        <label for="business">Business</label><br/>
        <input type="radio" id="maintenance" name="reason" click="enableWorkOrderField">
        <label for="maintenance">Maintenance</label><br/>
        <input type="radio" id="personal" name="reason" click="enablePersonalField">
        <label for="personal">Personal</label><br/>
        <input class="inputFieldset" bind="department" placeholder="Department" ${this.disableEnableDeptField} click="removeCheckInConfirmation"><br>
        <input class="inputFieldset" bind="workOrder" placeholder="Work order" ${this.disableEnableWorkOrderField} click="removeCheckInConfirmation"><br>
        <input class="inputFieldset" bind="relation" placeholder="Relation" ${this.disableEnablePersonalField} click="removeCheckInConfirmation"><br>
        </fieldset><br>
        <p>${this.confirmCheckIn}</p><br>
        <button type="button" click="checkIn" class="checkInButton" ${this.checkInButtonControl()}>Check In</button><br><br>
        <button type="reset" class="clearButton">Clear</button><br><br>
        </form>
        <form class="bottom">
        <br><input bind="idNumberCheckOut" placeholder="YYMMDD-NNNN*" click="removeCheckOutConfirmation" type="text" pattern="[0-9]{6}-[0-9]{4}" required><br><br>
        <button type=button class="checkOutButton" click="checkOut" ${this.checkOutButtonControl()}>Check Out</button><br><br>
        <p>${this.confirmCheckOut}</p>
        </form>
        </section>
        `
    }

}