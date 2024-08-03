import inquirer from "inquirer";
class Person {
    personality;
    constructor(personality = "Mystery") {
        this.personality = personality;
        this.personality = personality;
    }
    getPersonality() {
        return this.personality;
    }
    setPersonality(input) {
        if (input === 1) {
            this.personality = "Extrovert";
        }
        else if (input === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
}
let user = await inquirer.prompt({
    name: "input",
    type: "input",
    message: "If you like to talk other people type 1 and type 2 if you would rather keep to yourself: ",
});
let personality = new Person();
personality.setPersonality(Number(user.input));
console.log(`You are`, personality.getPersonality());
// class Student
class Student extends Person {
    _name = "";
    Student() {
        this._name = "";
    }
    get returnName() {
        return this._name;
    }
    set setName(value) {
        this._name = value;
    }
}
let user2 = await inquirer.prompt({
    name: "input",
    type: "input",
    message: "What is your name?"
});
let myStudent = new Student();
myStudent.setName = user2.input;
console.log(`Your name is ${myStudent.returnName} and personality:`, myStudent.getPersonality());
