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
    yaş(){
        let year = new Date().getFullYear()
        return year - this.birthdate
    }
    greet(){
        console.log(`ad: ${this.name}  \nyaş: ${this.yaş()} `)
    }
}
let Nedim = new Person("Nedim",1994)
let Aydın = new Person("Aydın",1962)
Aydın.greet()
Nedim.greet()

class Engineer extends Person{
    constructor(name,birthdate,type){
        super(name,birthdate)
        this.type = type
    }
    sayWhoYouAre(){
        console.log(`I'm ${this.name} ${this.yaş()} and ${this.type} engineer `)
    }
}
let Neim = new Engineer("Neim",1994,"Industrial")
Neim.sayWhoYouAre()
