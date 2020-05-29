// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
class Person {
	constructor(name = "Anonymous", age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi, I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeTown) {
		super(name, age);
		this.homeTown = homeTown;
	}

	hasHomeTown() {
		return !!this.homeTown;
	}

	getDescription() {
		let greeting = super.getGreeting();

		if (this.hasHomeTown()) {
			greeting += ` I am visiting from ${this.homeTown}`;
		}

		return greeting;
	}
}

const me = new Traveler("Kerri-Ann Bates", 31, "Orlando");
const other = new Traveler();

console.log(me);
console.log(me.hasHomeTown());
console.log(me.getDescription());
console.log(other);
console.log(other.hasHomeTown());
console.log(other.getDescription());
