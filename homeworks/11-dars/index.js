// #    /////////////////object/////////////////
// № 1
// object keylarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id,name

// № 2
// object valuelarining raqamga tenglarini toping
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// chiqish
// id

// № 3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn birga
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

// № 4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){}
// Search(obj,'WebBrain')
// chiqish
//     name:"WebBrain"

// № 5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj={
//   id:1,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"10$"
// }
// searchValue(obj,'i') => atirgul,qizil

// № 6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// chiqish
// 146

// № 7
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk
// let obj={
// id:1,name:'Usmon',job:'developer'
// }

// № 8
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:34,
//     year:1990
// }
// chiqish
// 'xato malumot kiritdingiz'

// № 9
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring
// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// chiqish
// true




// function Calculator() {
//   this.read = function() {
//     this.a = +prompt("a ni kiriting:", 0);
//     this.b = +prompt("b ni kiriting:", 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }


let a = prompt("biznes qilishga mamlagingizni kiritin")

if (a < 5000) {
    alert("mamlagingiz kam biznes qilishga")
}else{
    alert("bu summa yetadi biznes qilishga")
}