/*
variable 
operators
if
switch
for
do while
while
*/

// function
// x("marwa", 40)

// function x(name, age){
//     console.log(name, age)
// }
// const x = function(){
//     console.log("test")
//     return 5
// }

// console.log(x())


// arrow function
// const y = () => {
//     console.log(this)
//     console.log("test")
// }
// y()


// // const add = (a, b) =>  a+b
// // let result = add(6,4)

// // Get data from user
// const val = (msg="value = ") => prompt(msg)
// // calculate result
// const calculate = (val1 , val2 , ope) => {
//     let result
//     if(ope== "+") result =add(val1, val2)
//     else if(ope== "-") result =sub(val1, val2)
//     else if(ope== "*") result =mul(val1, val2)
//     else if(ope== "/") result =div(val1, val2)
//     return result
// }

// const add= (x,y) => +x + +y   // Number(x).  parseInt(x) parseFloat(x)  +   x*1.0
// const sub= (x,y) => x-y 
// const mul= (x,y) => x*y 
// const div= (x,y) => x/y 
// // print result


// let x = val("x = ")
// let y = val("y = ")
// let op = val("op = ")

// console.log(calculate(x, y, op))



const val = (msg="value = ") => prompt(msg)
const fToC = (f) =>  5 / 9 * ( f - 32 )
const cToF = (c = 0) =>  9 / 5 * Number(c) + 32

const runner=()=>{
    let temp = val("enter temp"), type_of_convert = val("enter type").toLowerCase()
    if(type_of_convert == "f") console.log(fToC(temp))
    else if(type_of_convert=="c" || type_of_convert=="C") console.log(cToF(temp))
    else console.log("blash 3ak")
}

runner()




