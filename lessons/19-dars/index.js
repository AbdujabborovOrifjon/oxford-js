// distructururing

//  array example - arraydagi elementlarni olib ishlatish usuli
let arr = [10, "john", true, "22"]

//  ... - spreed operator arraydagi nusxa olish uchun 
 let [ten, booleanTrue, ...hammasi] = arr;

 console.log(hammasi);


// let obj = {
//    name:"eshmat",
//   age:20,
//   status:"talaba",
// }


// ... - spreed operator objectlarda nusxa olish uchun 
 // object distrucing - object dagi qiymatlarni ozimiz nomlab  olish yoki objectdagi qiymatni olish nusxa olish usuli

// let {age, ...hammmasi} = obj

// console.log(hammmasi);

// nested disctrucning
// let arr = [1, [2, [5]]]
// let [bir, [ikki, [uchun]]] = arr

// console.log(uchun);

// DOM - document object modul - htmlda daraxt misolidagi tuzulma
// let text = document.querySelector(".text");

// text.style.color = "blue  "

// console.log(text);


// function removespace(params) {
  
// }

// let arr1 = ["salom", true, 50]

// let [alik, tog, l] = arr1

// console.log(alik);
