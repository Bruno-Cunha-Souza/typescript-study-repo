## OOP

Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to represent data and methods to manipulate that data. TypeScript, being a superset of JavaScript, supports OOP principles such as classes, inheritance, encapsulation, polymorphism, and interfaces.

### Classes

Classes are blueprints for creating objects. They encapsulate data for the object and methods to manipulate that data.

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old.`,
        );
    }
}

const person1 = new Person("Alice", 30);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Inheritance

Inheritance allows a class to inherit properties and methods from another class.

```typescript
class Employee extends Person {
    employeeId: number;
    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }
    work() {
        console.log(`${this.name} is working.`);
    }
}

const employee1 = new Employee("Bob", 25, 101);

employee1.greet(); // Output: Hello, my name is Bob and I am 25 years old.
employee1.work(); // Output: Bob is working.
```

### Encapsulation

Encapsulation is the bundling of data and methods that operate on that data within a single unit or class. It restricts direct access to some of an object's components.

```typescript
class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    deposit(amount: number) {
        this.balance += amount;
    }
    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300
```

### Polymorphism

Polymorphism allows methods to do different things based on the object it is acting upon, even if they share the same name.

```typescript
class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => animal.makeSound());
// Output:
// Bark
// Meow
```

### Interfaces

Interfaces define the structure that a class must follow without providing implementation details.

```typescript
interface Shape {
    area(): number;
    perimeter(): number;
}
class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(10, 5);

console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30
```

### Abstract Classes

Abstract classes are classes that cannot be instantiated directly. They can contain abstract methods that must be implemented by derived classes.

```typescript
abstract class Vehicle {
    abstract startEngine(): void;
    stopEngine() {
        console.log("Engine stopped.");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("Car engine started.");
    }
}

const myCar = new Car();

myCar.startEngine(); // Output: Car engine started.
myCar.stopEngine(); // Output: Engine stopped.
```

### Index Signatures

Index signatures allow you to define the type of properties that an object can have when the property names are not known in advance.

```typescript
class StringDictionary {
    [key: string]: string;
}
const myDictionary = new StringDictionary();
myDictionary["firstName"] = "John";
myDictionary["lastName"] = "Doe";
console.log(myDictionary["firstName"]); // Output: John
```

### Access Modifiers

Access modifiers control the visibility of class members. TypeScript supports `public`, `private`, and `protected` access modifiers.

```typescript
class Car {
    public make: string;
    private model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getModel() {
        return this.model;
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);

console.log(myCar.make); // Accessible
console.log(myCar.getModel()); // Accessible
// console.log(myCar.model); // Error: Property 'model' is private
```

### Overloading

Method overloading allows a class to have multiple methods with the same name but different parameter types or counts.

```typescript
class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}
const calculator = new Calculator();

console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.add("Hello, ", "World!")); // Output: Hello, World
```
