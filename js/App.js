class App extends Domer {

    home = new Home();
    visitor = new VisitorList(this.home.visitors);
    car = new Car(this.home.visitors);
    image = new Image();
   

    constructor() {
        super();
    }

    render(html, route) {
        return html`
            <section>
            <header>
        <a href="/"><h1>ACME</h1></a>
            <nav class="nav_links"> 
        <ul>
            <li><button class="buttonNav" click="showVisitors"><a href="/visitor">VISITORS</a></button></li>
            <li><button class="buttonNav" click="showCars"><a href="/car">CARS</a></button></li>
            <li><button class="buttonNav" click="showImage"><a href="/image">CCTV</a></button></li>
        </ul>
            </nav>
            </header>
              <main>
              ${route('/') ? this.home : ''}
              ${route('/visitor') ? this.visitor : ''}
              ${route('/car') ? this.car : ''}
              ${route('/image') ? this.image : ''}
              </main>
            <footer>© ACME</footer>
            </section>`
    }
}
new App();

