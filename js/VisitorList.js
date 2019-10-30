class VisitorList extends Domer {

    visitors = [];
    selectVisitorToRender = '';
    confirmCheckOut = '';


    /* get visitors() {
        return this.visitors;
    } */

    /* Lägger till objekt i listan */
    addVisitor(visitor) {
        this.visitors.push(visitor);
        console.log(this.visitors);
    }

    businessVisitor() {
        let businessVisitor = '';
        for (let visitor of this.visitors) {
            if (this.visitors.department !== '') {
                businessVisitor += `
            <div>${visitor.dateTime}</div> 
            <div>${visitor.fullName}</div>
            <div>${visitor.idNumber}</div>
            <div>${visitor.department}</div>   
          `
            }
            return businessVisitor;
        }
    }

    maintenanceVisitor() {
        let maintenanceVisitor = '';
        for (let visitor of this.visitors) {
            if (this.visitors.maintenance !== '') {
                maintenanceVisitor += `
            <div>${visitor.dateTime}</div> 
            <div>${visitor.fullName}</div>
            <div>${visitor.idNumber}</div>
            <div>${visitor.workOrder}</div>   
          `}
            return maintenanceVisitor;
        }
    }

    personalVisitor() {
        let personalVisitor = '';
        for (let visitor of this.visitors) {
            if (this.visitors.personal !== '') {
                personalVisitor += `
            <div>${visitor.dateTime}</div> 
            <div>${visitor.fullName}</div>
            <div>${visitor.idNumber}</div>
            <div>${visitor.personal}</div>   
          `
            }
            return personalVisitor;
        }
    }

    /* Renderar listan i div-element. */
    checkVisitorToRender() {

        if (this.visitors.department !== '') {
            return this.selectVisitorToRender = this.businessVisitor();
        }
        else if (this.visitors.maintenance !== '') {
            return this.selectVisitorToRender = this.maintenanceVisitor();
        }
        else {
            return this.selectVisitorToRender = this.personalVisitor();
        }

    }

    /* let completeVisitorList = '';
    for (let visitor of this.visitors) {
        if (visitor.department !== '') {
            completeVisitorList += `
        <div>${visitor.dateTime}</div> 
        <div>${visitor.fullName}</div>
        <div>${visitor.idNumber}</div>
        <div>${visitor.department}</div>   
      `}
        else if (visitor.workOrder !== '') {
            completeVisitorList += `
        <div>${visitor.dateTime}</div> 
        <div>${visitor.fullName}</div>
        <div>${visitor.idNumber}</div>
        <div>${visitor.workOrder}</div>
      `
        }
        else {
            completeVisitorList += `
        <div>${visitor.dateTime}</div> 
        <div>${visitor.fullName}</div>
        <div>${visitor.idNumber}</div>
        <div>${visitor.personal}</div>
      `
        }

    }
    return completeVisitorList; */


    /* Utcheckningsfunktion */
    removeVisitor(idNumber) {
        for (let i = 0; i < this.visitors.length; i++) {
            if (idNumber == this.visitors[i].idNumber) {
                //Bekräftar utcheckning
                this.confirmCheckOut = `A visitor with ID number ${this.idNumber} has been checked out.`;
                this.visitors.splice(i, 1);
                this.idNumber = '';
                break;
            }
            else {
                //Felmeddelande
                this.confirmCheckOut = `The ID number ${this.idNumber} does not exist in the list.`;
                this.idNumber = '';
            }
        }
        console.log(this.visitors);
    }


    render(html) {
        return html`
          <section>
          ${this.businessVisitor()}
          </section>
        `
    }

}