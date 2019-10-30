class VisitorList extends Domer {

    visitors = [];

    /* get visitors() {
        return this.visitors;
    } */

    /* Lägger till objekt i listan */
    addVisitor(visitor) {
        this.visitors.push(visitor);
        console.log(this.visitors);
    }

    /* Renderar listan i div-element. */
    getCompleteVisitorList() {
        let completeVisitorList = '';
        for (let visitor of this.visitors) {
            completeVisitorList += `
            <div>${visitor.dateTime}</div> 
            <div>${visitor.fullName}</div>
            <div>${visitor.idNumber}</div>
            <div>${visitor.department}</div>
            <div>${visitor.workOrder}</div>
            <div>${visitor.personal}</div>    
          `
        }
        return completeVisitorList;

    }

    /* Utcheckningsfunktion */
    removeVisitor(idNumber) {

        for (let i = 0; i < this.visitors.length; i++) {
            if (idNumber == this.visitors[i].idNumber) {
                /* Bekräftar utcheckning */
                this.confirmCheckOut = `A visitor with ID number ${this.idNumber} has been checked out at .`;
                this.visitors.splice(i, 1);
                this.idNumber = '';
                break;
            }
            else {
                this.confirmCheckOut = `The ID number ${this.idNumber} does not exist in the list.`;
                this.idNumber = '';
            }
        }
        console.log(this.visitors);
    }


    render(html) {
        return html`
          <section>
          ${this.getCompleteVisitorList()}
          </section>
        `
    }

}