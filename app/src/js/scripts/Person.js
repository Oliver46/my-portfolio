//object programming | blue print

// function Person(fullName, favColor) {
//     this.name = fullName,
//     this.color = favColor,
//     this.greet = function (){
//         console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color);
//     }
// }

//class sintax
class Person {
    constructor(fullName, favColor) { //constructor receve incomming values
        this.name = fullName;
        this.color = favColor;
    }
    greet() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color);
    }
}

export default Person