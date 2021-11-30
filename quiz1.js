/**Quiz 01: session storage, local storage, classes, Fetch, Axios, useEffect, LifeCycle Methods */

/* 1- create an array "food" that has the following values: "burger", "kabsa", "spaghetti", "pizza"  and save it inside the session storage and 
give it the key name "food". */

// write your code here

const food = ["burger", "kabsa", "spaghetti", "pizza"];

const data= sessionStorage.setItem("food", food);

/* 2- create an object of objects called "cars" that has the keys: mercedes, toyota, ford. each of these will have the following object as value:
        country: a string representing the country of origin of the car
        models: an array of strings containing three models of the car
    then, save this object inside a the local storage.
 */

// write your code here

const cars={

    mercedes:{
        country: "Germany",
        models:["S500", "E300", "C200"],

    },
    toyota:{
        country: "Japan",
        models:["Camry", "land Cruser", "supra"],

    },
  
    ford:{
        country: "Usa",
        models:["mustang", "Explorer", "Rapter"],


    }

}

const carsModels= localStorage.setItem("cars", JSON.stringify(cars) );



/* 3- create a function called getCar that takes string parameter "car" that will get the cars object from the database and print the following
using index 1 in the model array: "[car model] is made by [car] in [country]"  */

const getCar = function(car){
    //--- write your code here ---\\
    const cars = JSON.parse(localStorage.getItem("cars"));
      console.log(
        `${cars[car].models[1]} is made by ${car} in ${cars[car]["country"]}`
      );
    
    }
    getCar("mercedes");






/* ex: getCar(ford) -> "the mustang is made by ford in america "  
       getCar(mercedes) -> "the E200 is made by mercedes in Germany"
*/

/* 4- create a function called addFood that takes a string "meal", that will add the meal string to the food array saved inside the session storage and then print the array with the new value added */

const addFood = function(meal){
      //--- write your code here ---\\
    // sessionStorage.setItem("food", meal)
    food.push(meal);
    sessionStorage.setItem("food", food)

}
addFood("tasabii");

/* ex: 
addFood("shawarma") -> ["burger", "kabsa", "spaghetti", "pizza", "shawarma"] 
addFood("fried chicken") -> ["burger", "kabsa", "spaghetti", "pizza", "shawarma", "fried chicken"]
*/


/* 5- create a class dog that has name , species, and age of the dog
define a method makeSound that prints the name of the dog with word "woof"
*/

class Dog{
    constructor(name, species, age){
        this.name= name;
        this.species= species;
        this.age= age;
    }

    makeSound(){

        return `${this.name} says woof!`
    }
    //---  write your code here --\\
}
const n= new Dog("shosho","german", 5)
console.log(n.makeSound());

/* ex:
const dog1 = new Dog("Spike", "dobberman", 5)
dog1.makeSound() -> "Spike says woof!"
 */

/*life cycle methods
6- create a react class component and do the following:
   a- create a state called message and initialize it as an empty string, then insert it inside the the returned component.
   b- when the component mounts, change the value of the message state the value to the string "welcome to the jungle"
   c- create a state called message2 and do the same steps as in a and b but change the message2 to "quiz are awesome :)" state when the component updates.
   d- notice what happens in when you run the component and explain it
*/

import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      message: "",
      message2: "",
    };
  }

  componentDidMount() {
    this.setState({
      message: "welcome to the jungle",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message2 === this.state.message2) {
      this.setState({
        message2: "quiz are awesome :)",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.message2}</h1>
      </div>
    );
  }
}








/*
events
7- create a functional react component that has a state "insideInput" and an input and make it change the "insideInput" state only when you press enter   
*/

import React, { useState } from "react";

export default function Exam() {
  const [insideInput, setInsideInput] = useState("");

  return (
    <div>
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setInsideInput("Hello");
          }
        }}
      />
      <h1>{insideInput}</h1>
    </div>
  );
}

/*
fetch/axios
8- write a code that will make a request to 'https://jsonplaceholder.typicode.com/todos/1' and console log the title and completed keys from the response
*/

fetch("https://jsonplaceholder.typicode.com/todos/1")

  .then(response => response.json())
  .then(data => console.log(data.title, data.completed)); 
