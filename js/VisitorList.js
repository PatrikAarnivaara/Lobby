class VisitorList extends Domer {

    
    constructor (visitors) {
        super();
        this.visitors = visitors;
        console.log(visitors);
    }

    

    render(html) {
        return html`
          <div>
         <p>${this.visitors}</p>
          </div>
        `
    }

}