// Problem 1 
const user = {
  name: 'John',
  age: 40
};

// Destructuring the Properties
const {name, age} = user;

console.log(name); // Output: John
console.log(age); // Output: 40







// Problem 2
const circleArea = require('./circle');

const radius = 10;
const area = circleArea(radius);

console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);







// Problem 3
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    // Calculate Aria

    // area formula: area = width * Hight
    calculateAria() {
        return this.width * this.height;
    }
}
const rectangleWH = new Rectangle(5, 10);

console.log(rectangleWH.calculateAria()); // 5 * 10 = 50








// Problem 4
class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
//   Getter
  get fullName() {
    return `${this.fName} ${this.lName} `
  }
//   Setter
  set fullName(name) {
    const names = name.split(' ');
    this.fName = names[0] || '';
    this.lName = names[1] || '';
  }
}

const person = new Person('Eshan', 'Ahmed');
console.log(person.fullName); // Output: Eshan Ahmed

person.fullName = 'Tutul Bro';
console.log(person.fullName); // Output: Tutul Bro








// Problem 5
const circle = class {
  constructor(radius) {
    this.radius = radius;
  }


    // circumference formula: circumference = 2 * pi * radius of circle
  circumference() {
    return 2 * Math.PI * this.radius;
  }
};

const newcircle = new circle(10);
console.log(newcircle.circumference()); // Output: 62.83185307179586









// Problem 6
const perName = "personName";

const about = {
    [perName]:"Eshan",
    age:20,
    prof:"Founder of hublu-programmer",
}

console.log(about);











// Problem 7
class Animal {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }

    info() {
        return `${this.name} is ${this.kind}.`;
    }
}

// Extends class
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); 
        this.breed = breed;
    }

    info() {
        return `${this.name} is a ${this.breed} dog.`;
    }
}

const animal = new Animal("Some Animal", "helpful");
console.log(animal.info()); 

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.info()); 








// Problem 8
function Shape() {
  if (new.target === Shape) {
    throw new Error("Shape cannot be instantiated directly");
  }
  this.getarea = function() {
    throw new Error("getArea() is not implemented in the base Shape class");
  };
}


class myRectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

try {
  const invalShape = new Shape();
} catch (error) {
  console.error(error.message); // Shape cannot be instantiated directly
}

const rectangle = new myRectangle(5,10);
console.log(rectangle.getArea()); // 50











// Problem 9
class MathUtil {
    // Static method
    static square(number) {
      // Square Formula: 
        return number * number;
    }
}

const myNum = 10;
const squaredNum = MathUtil.square(myNum);
console.log(`The square of ${myNum} is ${squaredNum}.`); // Output: The square of 10 is 100.









// Problem 10
const mySymbol = Symbol("mySymbol");

const myObject = {
  [mySymbol]: "This is a secret value"
};

console.log(myObject[mySymbol]); // Output: "This is a secret value"

console.log(Object.keys(myObject)); // Output: []


