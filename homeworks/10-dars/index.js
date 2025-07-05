// 1 savol 

// let user = {
//     id: 1,
//     name:"eshmat",
//     age: 65,
//     status:"nafaqa oluvchi",
//     child: {
//     id: 2,
//     name:"toshmat",
//     age: 30,
//     status:"talaba",

//     }
// }

// let cloneUser = structuredClone(user);
// cloneUser.child.age = 45;

// console.log(cloneUser);




// 2 savol

let user = {
    id: 1,
    name:"eshmat",
    age: 65,
    status:"nafaqa oluvchi",
    child: {
    id: 2,
    name:"toshmat",
    age: 30,
    status:"talaba",
    func() {
        return this.age
    }
    }
}


// javobi


let cloneuser = {
    id: 1,
    name:"eshmat",
    age: 65,
    status:"nafaqa oluvchi",
    child: {
    id: 2,
    name:"toshmat",
    age: 30,
    status:"talaba",
    func() {
        return this.age
    }
    }
}

console.log(cloneuser.child.age);
