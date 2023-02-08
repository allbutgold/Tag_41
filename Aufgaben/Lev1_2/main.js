class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const someone = new person('John', 25);
console.log(someone.info());