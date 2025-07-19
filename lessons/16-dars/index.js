// find()	1-elementni topadi	Tezda bittasini olish
// findIndex()	1-element indeksini topadi	Keyinchalik o‘zgartirish uchun
// filter()	Shartga mos barchani oladi	Filtrlash uchun
// map()	Har bir elementni o‘zgartirib yangi array yaratadi	Transformatsiya
// forEach()	Har bir elementda amal bajaradi	Yon ta’sirlar (log, DOM, API chaqiriqla

// let arr = ["olcha", "uzum", "anor",]

//1
// bu sort tartiblaydi
// let newarr = arr.sort((a, b)=>{
// return a - b
// })
// console.log(newarr);   bu sort qilish yani son qiymatni tartiblab beradi
//  let newarr = arr.sort((a, b)=> a,localaCompare(b))
// agar qiymat string bolsa u xolda bunday qilamiz 


//2
// bu every barcha qiymatni tekshiradi va hammasi togri bolsa true qaytaradi 1 tasi ham xato bolsa false qaytaradi
// let value = arr.every((value)=> {
//     return value.includes("a");
// })
// console.log(value);


//3
//  bu some esa 1 tasi togri bolsa ham true beraveradi
// let value = arr.some((value)=> {
//     return value.includes("z");
// })
// console.log(value);






//4
// let arr = [1, 2, [2, 4, [5, 6, [7, 8 [9, 10]]]]]

// let newarr = arr.flat(Infinity)  bu flat arrayni ichidagi arraylarni ochirib tashlaydi

// console.log(newarr);


//5
// flatmap ham flatga oxshash bita arrayni ochirib tashlaydi, lekin flatmap har bir elementni ozgartirib tashlaydi
// let arr = [1, 2, [2, 4, [5, 6, [7, 8 [9, 10]]]]]

// let newarr = arr.flatMap((value)=> {
//    return value 
// })

// console.log(newarr);


//6
// fill arrayni malumotlarini orniga boshqa malumotlarni joylaydi
// let arr = [1, 2, 3, 4]

// let newarr = arr.fill([10, 20, 30], 1, 3) 

// console.log(newarr);



//7
// bu copywhithin arrayni ichidagi malumotdan nusxa olib va boshqa joyiga joylaydi
// let arr = [1, 2, 3, 4]

// let newarr = arr.copyWithin(0, 2, 4)

// console.log(newarr);
