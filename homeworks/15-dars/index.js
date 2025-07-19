//1 

let arr = [
    {
    name: "Vali",
    age: 20,
    id:  97483839,
},

  {
    name: "ali",
    age: 15,
    id:75382204,
},

 {
    name: "toshmatali",
    age: 5,
    id:  14374392,
}
]

let newarr = arr.sort((a, b)=> a.age - b.age);
let newarr2 = arr.sort((a, b)=> a.id - b.id);
let newarr3 = arr.sort((a, b)=> a.name - b.name);


console.log(newarr);
console.log(newarr2);
console.log(newarr3);



//2
