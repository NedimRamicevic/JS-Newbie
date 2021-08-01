// function Person(name,birthYear){
//     this.name = name
//     let year = new Date().getFullYear()
//     this.age = year - birthYear
// }
// Person.prototype.greet = function() {
//     console.log(`Ad: ${this.name} 
// Yaş: ${this.age}`)
// }

class Person{
    constructor(name,birthdate){
        this.name = name
        this.birthdate = birthdate
    }
    greet(){
        let year = new Date().getFullYear()
        console.log(`ad: ${this.name}  \nyaş: ${year - this.birthdate} `)
    }
}
let Nedim = new Person("Nedim",1994)
let Aydın = new Person("Aydın",1962)
Aydın.greet()
Nedim.greet()