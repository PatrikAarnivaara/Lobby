class VisitorList extends Domer {

    visitors = [];
    confirmCheckOut = '';
    idNumber;


    /* Lägger till objekt i listan */
    addVisitor(visitor) {
        this.visitors.push(visitor);

    }

    /* Renderar ut olika objekt */

    checkVisitorToRender() {
        let completeVisitorList = '';

        /*
        Kontrollerar den tillfälliga variabeln visitor i inkommande objekt, använd ej this. här,
        kolla endast inkommande, inte this.visitor.department då kollas alla departmentattribut
        i hela listan.
         */

        for (let visitor of this.visitors) {
            if (visitor.department && !visitor.workOrder && !visitor.personal) {
                completeVisitorList += `
        <div>${visitor.dateTime}</div> 
        <div>${visitor.fullName}</div>
        <div>${visitor.idNumber}</div>
        <div>${visitor.department}</div>   
      `
            }
            else if (visitor.workOrder && !visitor.department && !visitor.personal) {
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
        //return utanför for..of-loopen
        return completeVisitorList;
    }

    /* Utcheckningsfunktion */
    removeVisitor(idNumber) {
        for (let i = 0; i < this.visitors.length; i++) {
            if (idNumber == this.visitors[i].idNumber) {
                //Bekräftar utcheckning
                this.idNumber = idNumber;
                this.confirmCheckOut = `A visitor with ID number ${this.idNumber} has been checked out.`;
                this.visitors.splice(i, 1);
                this.idNumber = '';
                break;
            }
            else {
                //Felmeddelande
                this.idNumber = idNumber;
                this.confirmCheckOut = `The ID number ${this.idNumber} does not exist in the list.`;
                this.idNumber = '';
            }
        }
    }


    render(html) {
        return html`
        <section id = "render">
            ${this.checkVisitorToRender()}
          </section >
        `
    }

}