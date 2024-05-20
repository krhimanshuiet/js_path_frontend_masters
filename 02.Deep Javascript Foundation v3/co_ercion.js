// coercion 

//toString
//toNumber
//toBoolean

// const a = "-0";

// console.log(Boolean('abcd'))

// function toBoolean(value){
//     if (typeof value === 'boolean')
//     return value;
    
// }


//abstract operations - coersion
/*
ToPrimitive

*/


//toString
// const c = {toString(){return "X"}}

// console.log(c.toString())

// const arr = [1,2,3,4]

// console.log(arr.toString())

// const obj = {}

// console.log(obj.toString())

// toNumber

// const c = ""
// console.log(Number(c))
// const d = "-0"
// console.log(Number(d))
// const e = undefined
// console.log(Number(e))

// const f = {}
// console.log(Number(f))

// toBoolean

const a = []
console.log(Boolean(a))

//falsy -  "" , 0 , -0 , null , NaN , false undefined
// truthy - "foo" 23 {A:!} true [1,3] function()

// corner cases of coercion
console.log( undefined ??  "hello world")




