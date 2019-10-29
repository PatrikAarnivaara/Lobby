class Image extends Domer {
    
    constructor() {
        super();
    }

    render(html) {
        return html`
          <section>
            <img class="cctvImage" src="/image/img_cctv.jpg" alt="CCTV">
          </section>
        `
    }

}