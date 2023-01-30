const airline = 'Tap air Portugal'
const plane = 'A320'
// some build-in function
airline.indexOf('r') // find first what order position of elememt result 6 
airline.lastIndexOf('r') // find last what order position of elememt result 11
airline.slice(4) // start slice with number 4 of string result air Portugal
airline.slice(4,7) // start slice with number 4  to number 7 result air
//with negative number it will be cut back
airline.slice(-2) // start with the last element to airline.length + (-2) result al
airline.slice(1,-1) // start with 1 and slice back 1 result ap air Portugal
function checkMealSeat(seat){
    let s = seat.slice(-1)
    if(s == 'B' || s=='C'){
        console.log('U got middle seat')
    }else{
        console.log('U got lucky')
    }
}
checkMealSeat('11B')
checkMealSeat('11C')
checkMealSeat('11D')

airline.toLocaleUpperCase() // uppercase string
airline.toLocaleLowerCase() // lowercase lowercase string
//replacing
const priceGB = '288,97$'
const priceUS = priceGB.replace('$','vnđ').replace(',','.') // replace first ele it found 
console.log(priceUS)
let a = 'ddđd sasda'
console.log(a.replaceAll('d','a'))// replace all ele


console.log(a.includes('d')) // true check  if the element belongs to string
console.log(a.startsWith('d')) // true
console.log(a.endsWith('d')) // false

// split convert string to array by specified character
let split1 = 'a+v+f+d+s+f'
let abc = split1.split('+')
console.log(abc)// [ 'a', 'v', 'f', 'd', 's', 'f' ]

console.log(abc.join('+'))//a+v+f+d+s+f String concatenation by specified character
///padding
const message = 'go to 123'
console.log(message.padStart(25,'+'))// add charactor in head result (++++++++++++++++go to 123).lenght = 25
console.log(message.padStart(25,'+').padEnd(28,'-')) //++++++++++++++++go to 123--- length = 28
//repeat
const message2 = 'Bad weather ...'
console.log(message2.repeat(3))

