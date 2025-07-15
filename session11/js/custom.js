//any
// x = 5
// x = "test"
// console.log(typeof x)
// x= false
// x = {}
// x = []

// var let const
// var x = 5
// x ="test"
// x = true

// var x = 6
// let x =5
// x= false

// let x = 3
// if(true){
//     let x = 6
// }

// console.log(x)

// console.log(x)
// let x = 5

// math
// + - * ** / %
// assignment
// = += -= /= *= 
// x+=5 // x = x+5
// increment dec. post- pre- fix

// x = 5
// let z = ++x
// console.log(z, x)
// comporison. boolean 
// > < >= <= != == !== === !==
// let x = 5 , z= "5"
// console.log( x === z )

// null ? console.log("yes") : console.log("No")


//logical 
// && || ! ^ 


// ternery operator
let x = 5
let result = (x==5)? 3:4

// if switch
// if(x == 6 ){
//     console.log("test")
// } else 
//     console.lof("NO")

// if(true){}
// else if(false){}
// else if(true){}
// else {}
// if(x<1)

// month = 1
// switch(month){
//     case 1: { }
//     case 2: { }
//     case 3: { }
//     default:{ }
// }


// let year = 2000
// switch(year%12){ //0 -> 11
//     case 0: console.log("b0"); break;
//     case 1: console.log("b1"); break;
//     case 2: console.log("b2"); break;
//     case 3: console.log("b3"); break;
//     case 4: console.log("b4"); break;
//     case 5: console.log("b5"); break;
//     case 6: console.log("b6"); break;
//     case 7: console.log("b7"); break;
//     case 8: console.log("b8"); break;
//     case 9: console.log("b9"); break;
//     case 10: console.log("b10"); break;
//     case 11: console.log("b11"); break;
//     default: console.log("invalid data")
// }


//loops
// for for in for of foreach while do while

// let count = 12
// while(true){
//     //any details
//     console.log(count)
//     count++
//     if(count == 15) break
// }
// console.log("count = ", count)

// let data = prompt("enter data")

// while(data != "exit"){
//     data = prompt("enter new value")
// }

// let data
// do{
//     data = prompt("enter a value")
// } while(data!="exit")

// for(let x = 0; x < 10; x++ ){
//     console.log(x)
// }

for(let i = 1; i <=10 ; i+=3 ){
    if(i==4) break
    console.log("hello ", i)
}