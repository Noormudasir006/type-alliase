"use strict";
//type alliase
Object.defineProperty(exports, "__esModule", { value: true });
// type IrfanFriend = number;
// type IrfanOffice = number;
// const irfanFriend: IrfanFriend = 12345566;
// const irfanOffice: IrfanOffice = 987765;
// console.log(irfanFriend)
// console.log(irfanOffice)
//task
// type Human = string;
// type Animal = string;
// let human: Human = "noor";
// let animal: Animal = "cat"
// console.log(human);
// console.log(animal);
//array task
// type Array = string[]
// let array : Array = ["noor", "sana", "alishba"]
// console.log(array)
//type union / intersection
// let rollNUmber :string | number = 12345
// rollNUmber = "abcd"
// console.log(rollNUmber);
//type literals
// let size : "small" | "medium" | "large" = "medium"
// size = "small"
// size = "large"
// console.log(size);
//task
// let trafficLight: "red" | "green" |"yellow"
// trafficLight = "red"
// trafficLight = "yellow"
// trafficLight = "purple"   // error
// console.log(trafficLight);
//task
// let user: "logIn" | "logOut" = "logIn"
// user = "logIn"
// console.log(user);
//assigning type to object
// let car: {
//     name: string,
//     model: number,
//     variant: string
// } = {
//     name: "toyota",
//     model: 2023,
//     variant: "1800cc"
// }
// console.log(car);
// console.log(car.name);
// console.log(car.model);
// console.log(car.variant);
//function in object
// let carSpeed: maxSpeed()=> = {
//     maxSpeed: ()=>{
//         return "my car's max speed is 200"
//     }
// }
// console.log(carSpeed);
// console.log(carSpeed.maxSpeed());
//home task
let array1 = [
    { name: "car", color: "purple" },
    { name: "bike", color: "white" },
    { name: "toys", color: "red" },
    { name: "book", color: "purple" },
    { name: "bag", color: "white" },
    { name: "clothes", color: "red" },
    { name: "wheel", color: "purple" },
    { name: "comb", color: "white" },
    { name: "basket", color: "purple" },
    { name: "shoes", color: "red" },
];
let result = array1.filter(element => element.color === "white" || element.color === "purple");
console.log(result);
