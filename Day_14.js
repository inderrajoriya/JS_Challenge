class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
    static genericGreet() {
        return 'Hello, this is a generic greeting!';
    }
}
console.log(Person.genericGreet());   
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}                   
const person = new Person('Inder', 25);
console.log(person.greet());
person.updateAge(30); 
const student = new Student('Raj', 20, 'S12345');
console.log(student.getStudentId());
