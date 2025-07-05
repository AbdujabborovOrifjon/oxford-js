// Primitive: Str, Num, BigInt, Boolean, Symbol(), Undefined, Null
// NonPrimitive: Objects: => object, array, function

// let obj = {
//   ism: "Oxford",
//   yoshi: 2,
//   sohasi: "O'quv Markaz",
//   uquvchilar: 200,
//   manzil: "Kosonsoy markazi, Dunyo do'koni ro'parasi",
// };

// // Static and Dinamic

// // Static
// console.log(obj.manzil);

// // Dinamic
// console.log(obj["manzil"]);

// let ism = "yoshi";

// // console.log(obj[ism]);

// let age = "name";
// let obj = {
//   name: "Algoritm",
//   age: 6,
//   status: "IT Center",
//   [age]: "Oxford",
//   age,
// };

// console.log(obj.name); // Oxford
// console.log(obj[age]); // Oxford
// console.log(obj["status"]); // IT Center
// console.log(obj.age); // "name"

// let obj = {
//   name: "Algoritm",
// };

// let a = 5;
// let b = 5;

// console.log(a === b);

// let obj1 = {
//   name: "Algoritm",
// };
// let obj2 = {
//   name: "Algoritm",
// };

// console.log(obj1 === obj2);

// Object.assign() - 2 va undan ortiq objectlarni bir biriga qo'shib beradi.
// Undan tashqari yuzaki nusxa olib beradi.

// let obj1 = {
//   name: "Eshmat",
// };

// let obj2 = {
//   age: 20,
// };

// let newObj = Object.assign(obj1, obj2);

// console.log(newObj);

// let obj = {
//   a: 10,
//   b: 20,
// };

// let newObj = Object.assign({}, obj);

// newObj.a = 100;

// console.log(obj);

// let parent = {
//   status: "Xonanda",
// };

// let child = Object.assign({}, parent);
// child.unversal = true;
// console.log(child);

// let bobosi = {
//   name: "Eshmat",
//   age: 80,
//   child: {
//     name: "Toshmat",
//     age: 55,
//     child: {
//       name: "Gulmat",
//       age: 25,
//     },
//   },
// };

// let qoshni = Object.assign({}, bobosi);
// let qoshni = structuredClone(bobosi);

// qoshni.name = "Vali";
// qoshni.age = 90;

// qoshni.child.name = "Ali";
// qoshni.child.age = 50;

// qoshni.child.child.name = "Salim";
// qoshni.child.child.age = 22;

// console.log(bobosi);
// console.log(qoshni);
 
// structuredClone() -bizga object dan chuqur nusxa olib beradi.
// Lekin Object ni ichida function bor bo'lsa bu ham ojiz bo'lib qoladi.

// let obj = {
//   name: "Ali",
//   age: 30,
//   status: "Ishchi",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }
