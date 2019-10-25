class App extends Domer {

    home = new Home();
    checkIn = new CheckIn();
    checkOut = new CheckOut();
    visitor = new Visitor();
    car = new Car();
    image = new Image();

    constructor() {
        super();
    }

    /* <i class="fa fa-home"></i> 
        <i class="fa fa-check-square"></i>
        <i class="fa fa-user" aria-hidden="true"></i>
        <i class="fa fa-car" aria-hidden="true"></i>
        <i class="fa fa-camera" aria-hidden="true"></i>
        <i class="fa fa-check-square-o" aria-hidden="true"></i>
        <li><h1>ACME Ltd</h1></li>
    */

    render(html, route) {
        return html`
            <section>
            <header>
        <!--<img class="logo" src="/image/acme.png" alt="logo">-->
            <nav class="nav_links"> 
        <ul>
            <!--<li class="cctvImage"><img src="${this.imageCctv}" style="visibility:${this.visible}" alt="CCTV"></li>-->
            <li><button class="buttonNav" click="showCompleteList"><a href="/">Home</a></button></li>
            <li><button class="buttonNav" click="showCompleteList"><a href="/checkIn">Check In</a></button></li>
            <li><button class="buttonNav" click="showCompleteList"><a href="/checkOut">Check Out</a></button></li>
            <li><button class="buttonNav" click="showVisitors"><a href="/visitor">Visitors</a></button></li>
            <li><button class="buttonNav" click="showCars"><a href="/car">Cars</a></button></li>
            <li><button class="buttonNav" click="showImage"><a href="/image">Image</a></button></li>
        </ul>
            </nav>
            </header>
              <main>
              ${route('/') ? this.home : ''}
              ${route('/checkIn') ? this.checkIn : ''}
              ${route('/checkOut') ? this.checkOut : ''}
              ${route('/visitor') ? this.visitor : ''}
              ${route('/car') ? this.car : ''}
              ${route('/image') ? this.image : ''}
              </main>
            <footer>ACME Ltd.</footer>
            </section>`
    }
}
new App();

