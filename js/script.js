function Airplane(model, seatingCapacity, maxSpeed) {
	//Airplane Object Properties
	this.model = model;
	this.seatingCapacity = seatingCapacity;
	this.maxSpeed = maxSpeed;
	//method to print their properties
	this.print = function print() {
		
		return "Model is " + this.model + ". It's Seating Capacity is " + this.seatingCapacity + " and Maximum Speed is "+this.maxSpeed;
		
	}
}

var plane1 = new Airplane('Airbus A350', 857, 945);
console.log("plane1 >>"+plane1.print());
var plane2 = new Airplane('Airbus A380', 1225, 900);
console.log("plane2 >>"+plane2.print());
var plane3 = new Airplane('Boeing 767 ', 601, 1000);
console.log("plane3 >>"+plane3.print());

console.log(plane1);
console.log(plane2);
console.log(plane3);

plane1.seatingCapacity += 10;
plane2.seatingCapacity += 10;
plane3.seatingCapacity += 10;
console.log('---Seating capacity increased---')
console.log(plane1.print())
console.log(plane2.print())
console.log(plane3.print())
console.log('---maxSpeed deleted---')
delete plane1.maxSpeed;
delete plane2.maxSpeed;
delete plane3.maxSpeed;

console.log(plane1);
console.log(plane2);
console.log(plane3);
console.log('---avgSpeed properties created---')
plane1.avgSpeed = 600;
plane2.avgSpeed = 600;
plane3.avgSpeed = 600;

console.log(plane1);
console.log(plane2);
console.log(plane3);