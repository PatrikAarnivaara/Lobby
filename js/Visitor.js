class Visitor extends Domer {

    dateTime;
    fullName;
    idNumber;
    
    constructor(dateTime, fullName, idNumber){
        super();
        this.dateTime = dateTime;
        this.fullName = fullName;
        this.idNumber = idNumber;
        
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


    render(html) {
        return html`
          <div>
          ${this.fullName} ${this.idNumber} ${this.numberPlate} 
          </div>
        `
    }


}