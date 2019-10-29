class Visitor extends Domer {

    dateTime;
    fullName;
    idNumber;
    numberPlate;
    
    constructor(dateTime, fullName, idNumber, numberPlate){
        super();
        this.dateTime = dateTime;
        this.fullName = fullName;
        this.idNumber = idNumber;
        this.numberPlate = numberPlate;
    }

    get dateTime(){
        return this.dateTime;
    }

    get fullName(){
        return this.fullName;
    }

    get idNumber(){
        return this.idNumber;
    }

    get numberPlate(){
        return this.numberPlate;
    }

    render(html) {
        return html`
          <div>
          ${this.fullName} ${this.idNumber} ${this.numberPlate} 
          </div>
        `
    }


}