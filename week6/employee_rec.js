
var employees = []



// constructor functions  outputs objects, creates new objects

// function Car(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }
// var jeep = new Car("jeep", "cherokee", 1995)
// console.log(jeep)

class Employee{
    constructor(name, title, salary, status = "full time" ){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
    this.newHire = () => {
        console.log({name: this.name, title: this.title, salary: this.salary, status: this.status})
        // console.log(this)
        
    }
    employees.push(this)
    }
}
const John = new Employee("John","Forman","100,000",)
const Mayer = new Employee("Mayer","Forman","100,000")
const Crystal = new Employee("Crystal", "CEO", "100,000", "part time")




var intern = new Employee("Jimmy", "forman", "50,000", "part time")

// console.log(John, Mayer, Crystal)
Crystal.newHire()
intern.newHire()
var list = [Crystal, John, Mayer]
// console.log(list)

// console.log(employees)