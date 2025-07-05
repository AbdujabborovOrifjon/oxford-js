// homework




// // 1// for (let a = 0; a <= 100.; a++) {
//   a =  prompt("100 dan katta son kiritin")
  
//  }



// // 2

// for (let a = 0; a <= 100.; a++) {
//   a =  prompt("100 dan katta son kiritin")
  
//  }

// 3

// for (let f = 0; f < 100; ) {
//  if (f %  3 === 0) {
  
  
//  }
//   console.log(f);
// }


// for(; ;){
//   let value = prompt("100 dan katta son kiriting")
//   let num = value === null ? value : Number(value)
//   if (num > 100 || num === null) break;

//     else if(num <= 100) continue ;
// }          
 





 
//1
// Prefix form (++i);
// forda qilingan

// for (let i = 0; i < 5; ++i) {
//     alert(i)  
// }


  // while da qilingan

// let a = 0
// while (a <= 10) {
//   alert(a)
//   ++a
// }x`


// let s = 0
// do {
//       alert(s)
//       s++
// }while(s < 5)







// 2
// Prostfix form (++i);
// forda qilingan
// for (let r = 0; r < 5; r++) {
//     alert(r)  
// }



  // while da qilingan

// let k = 0
// while (k <= 10) {
//   alert(k)
//   k++
// }

// do while da qilingan
// let j = 0
// do {
//       alert(j)
//       j++
// }while(j < 5)














// 3
// for (; ;) {
//    let a = prompt("100 dan katta son kiritin")  
//    if (a > 100) {
//     alert("togri")
//    }else if(a <= 100)  continue
// }


// let h = prompt("100 dan katta son kiritin")
// while (h >100) { 
//   alert("togri")
//   if(h <= 100) break
// }




// for (let i = 2; i <= 100; i++)
//     let tub = true;              
//     for (let j = 2; j <= Math.sqrt(i); j++) {  
//         if (i % j === 0) {
//             tub = false;          
//             break;
//         }
//     }
//     if (tub) 
//         console.log(i);
      
    
    
    
    


let n = +prompt("n ni kiriting:");

for (let i = 2; i <= n; i++) {
    let tub = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            tub = false;
            break;
        }
    }

    if (tub) {
        alert(i);
    }
}
