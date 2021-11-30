// class Dog{
//     constructor(name, species, age){
//         this.name= name;
//         this.species= species;
//         this.age= age;
//     }

//     makeSound(){

//         return `${this.name} woof`
//     }
//     //---  write your code here --\\
// }
// const n= new Dog("shosho","german", "one year");
// console.log(n.makeSound());



fetch("https://jsonplaceholder.typicode.com/todos/1")

  .then(response => response.json())
  .then(data => console.log(data));
