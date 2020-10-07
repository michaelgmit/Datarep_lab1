class Vehicle {
    constructor(make, modle, year){ //constructor - starting point of every class
        this.make = make;
        this.modle = modle;
        this.year = year;

    }

    Information(){ //method to output to console
        console.log(`Make: ${this.make}.`); // Dollar symbol used to include variable
        console.log(`Make: ${this.modle}.`);
        console.log(`Make: ${this.year}.`);
    }

}

class Cars extends Vehicle {
    constructor(make, modle, year, doors){ 
        super(make, modle, year);
        this.doors = doors;
    }

    Information(){ //invokes method on vehicle class
        super.Information();
        console.log(`Doors: ${this.doors}.`);
    }
}

let myCar = new Cars('VW', 'Passat', 2011, 5);
myCar.Information();

// let myVehicle = new Vehicle('VW', 'golf', 2010);
// myVehicle.information();