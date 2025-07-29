// Selectorlar
// 1:

// 1 usul - class orqali html elementlarini chaqirish

// let box = document.querySelector(".box")

// ========================================

// 2 usul - teg orqali html elementlarini chaqirish

// let box = document.querySelector("div")

// ================================================

// 3 usul - barcha class yoki id larni arrayda chaqirish

// let box = document.querySelectorAll(".box")

// ========================================

// 4 usul html dagi id bilan berilgan elementni olish #

// let box = document.getElementById(".")

// ================================

// 5 usul - html dagi elementlarni boyicha arrayda chaqirib olish

// let box = document.getElementsByClassName("box")





// ? dom manipulation - js da dom ga ta'sir otkazish , ozgartirish


// textCoduntent - hmlt elementlarni malumotini ozgartirish

// innerHTML - element malumotini ozgartirish yoki html element berish

// style - html elementlarni style xosssasini ozgartirish

// createElement - jsda turib html element yaratish

// appendChild - jsda elementi htmlga biriktirish yoki qoshish


// let count = document.createElement("h3")
// let parent = document.createElement("h3")

// count.style.color = "blue"


// p.appendChild(count)




let box = document.querySelector(".box")
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


arr.forEach((item)=>{

let coun = document.createElement("h2")
coun.textContent = item
if (item % 2 === 0) {
   coun.style.color = "blue"
}else{
coun.style.color = "red"
}

box.appendChild(coun)

})

console.log(box);
