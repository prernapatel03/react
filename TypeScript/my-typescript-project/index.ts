let y : bigint = 5555555555555555555555555555n;
// console.log(y)

let x
// console.log(typeof x)

let fname : string = "prerna"
let lname : string = "prerna"

let compateFullname : boolean = fname == lname
// console.log(compateFullname) 

let price : string = `price ${10}$`
// console.log(price)

let longText = "dddddddddddddgggggggggg"
let shortText = longText.split('')
// console.log(shortText)

function isEven(m : number):boolean{
    return m%2 === 0

}
// console.log(isEven(5))

function divide(d:number):boolean{
    return d%4 === 0 && d%7 === 0 
}
// console.log(divide(24))

async function fetchdata(): Promise<unknown> {
     const response = await fetch('https://dummyjson.com/products/1');
     const data = await response.json();
     if(typeof response === 'object'){
            return data.id
     }
}
console.log(fetchdata())