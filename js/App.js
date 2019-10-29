class App extends Domer {

    
    image = new Image();
    /* visitors = new VisitorList();
    home = new Home(this.visitors); */

    constructor() {
        super();
        this.visitors = new VisitorList();
        this.home = new Home(this.visitors);
    }

    render(html, route) {
        return html`
            <section>
            <header>
        <a href="/"><h1>ACME</h1></a>
            <nav class="nav_links"> 
        <ul>
            <li><button class="buttonNav" click="showVisitors"><a href="/visitor">VISITORS</a></button></li>
            <li><button class="buttonNav" click="showImage"><a href="/image">CCTV</a></button></li>
        </ul>
            </nav>
            </header>
              <main>
              ${route('/') ? this.home : ''}
              ${route('/visitor') ? this.visitors : ''}
              ${route('/image') ? this.image : ''}
              </main>
            <footer>© ACME</footer>
            </section>`
    }
}
new App();

