// Qarama-qarshi raqam

// 1
function opposite(number) {
  return(-number);
}



//2 

// Mantiqiy qiymatlarni "Ha" yoki "Yo'q" qatorlariga aylantiring.

function boolToWord( bool ){
  if(bool === true){
    return 'Yes'
  }else{
    return 'No'
  }
}


// 3

// String bo'shliqlarini olib tashlang

function noSpace(x){
return x.replace(/\s/g, "")
}

// 4


// Booleanni stringga aylantirish

function booleanToString(b){
if(b === true){
  return "true"
}else{
 return "false"
}
}


// 5 

// Boshlang'ich - Xaritasiz yo'qolgan


function maps(x){
return x.map(o => o * 2)
}