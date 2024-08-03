import inquirer from "inquirer" // import inquirer

class Person {
  constructor(
    //private property
    private personality: string = "Mystery" // default value
  ) {
    this.personality = personality
  }
  //method get personality
  getPersonality() {
    return this.personality
  }
  //method set some values on different conditions
  setPersonality(input: number) {
    if (input === 1) {
      this.personality = "Extrovert"
    } else if (input === 2) {
      this.personality = "Introvert"
    } else {
      this.personality = "Mystery"
    }

  }

}

// for user input
let user = await inquirer.prompt({
  name: "input",
  type: "input",
  message: "If you like to talk other people type 1 and type 2 if you would rather keep to yourself: ",

})

// create new instance
let personality = new Person()
// call method with the user input 
personality.setPersonality(Number(user.input))
console.log(`You are`, personality.getPersonality());

// class Student
class Student extends Person {
  private _name : string = ""
  Student(){
    this._name = "";
  }
  get returnName() : string{
    return this._name
  }
  set setName(value : string){
    this._name = value
  }
}


let user2 = await inquirer.prompt({
  name : "input",
  type : "input",
  message : "What is your name?"
})

let myStudent : Student = new Student()
myStudent.setName = user2.input;
console.log(`Your name is ${myStudent.returnName} and personality:`, myStudent.getPersonality())