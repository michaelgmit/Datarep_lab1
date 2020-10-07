class BMI { //

    constructor(height, weight){ //initialize data within class
        this.height = height; // height and weight set to local variables
        this.weight = weight; 
    }

        calculateBMI(){ //method
            let bmi = this.weight/(this.height**2); //formula to calculate bmi
            return bmi;
        }
}

let myBMI = new BMI(2, 90); //object
console.log(myBMI.calculateBMI()); // what is output to the console
