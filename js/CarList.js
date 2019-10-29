class Car extends Domer {

    constructor(visitors) {
        super();
        this.visitors = visitors;
        console.log(this.visitors);
        
    }

    render(html) {
        return html`
          <section>
          ${this.visitors}
          </section>
        `
    }

}