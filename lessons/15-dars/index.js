// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sum = 0

// arr.forEach((value) => {
//     sum += value
// });

// console.log("yigindisi", sum);


// 2

// let arr2 = arr.map((value) => {
//  return value
// })
    
// console.log(arr2);


//3

// let juft = arr.filter((num => num % 2 === 0)) 

// console.log(juft);








// let arr = ["html", "css", "js", "react",]

// console.log( arr.join("   "));   //    Array malumotlarni stringga aylantiradi


// console.log(arr.reverse()); //   Array malmotlarni teskari tartibda chiqaradi



// let a = [1, 2, 3, 4,]
// let b = [5, 6, 7, 8,]
// let newarr = arr.concat(a, b)
// console.log(newarr);          //  Array malumotlarni qoshib beradi 2 va undan ortiq arraylarni



//  console.log(arr.slice(1, 3));  // Array malumotlarni indexni kiritsak kesib beradi nusxa olib beradi   asl arrayga tasir qilmaydi



// let newarr = arr.splice(startidex, deleteCount, repleser)  //splice 3 ta qiymat oladi 
// let newarr = arr.splice(0, 1) //  splice asl arrayga tasir korsatadi hozi 0 indexni 1 ta elementini kesib oladi
// console.log(newarr);
// console.log(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newarr = arr.forEach((value, index, arr)=> {
//     // console.log(value, index, arr);
   
// })


// let newarr2 = arr.map((value, index, arr)=> {
//    return value * 2;
//     console.log(value, index, arr);
  
    
// })

// console.log(newarr2);




let newarr = arr.find((value)=> {
if (value === 2) return value;
})
console.log(newarr);


// 3
// 4
// 5
// 6
// 7
// 8
// Adwenced Array///

// Array.filter- bu method ishlatilishdan maqsad array elementlarini bizning shartga togri kelganini qoldiradi , qolganini chiqarib tashlaydi.
// Array.map - bu returnga qaytadi ya'ni return mapdan ishlaydi.
// Array.forEach - bu har bir elementning navbati bilan funksiya bajaradi.
// Array.find - bu shartga mos birinchi elementni qaytaradi.
// Array.findIndex - bu shartga mos birinchi elementning indexni qaytaradi.(-1)
// array.lastfindIndex- bu shartga mos oxirgi indexni qaytaradi . (-1)