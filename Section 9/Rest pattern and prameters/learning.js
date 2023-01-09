/* The rest pattern is the same syntax with sread operator ...variable
 And the different is the sread use to make a mutiple function or take all elements out the array 
 or make a new arr but the same value with initial array
 But rest pattern use to collect mutiple element and condense[cô đọng] them into an array */
 let restaurant = {
    name : 'Classico Italiano',
    location: 'Nam tu Liem ',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    } ,
    // make function order in the restaurant to get what customer want in starterMenu and mainMenu  
    order : function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } ,

    orderDelivery: function({time=1,adress='no adress',mainIndex= 0,starterIndex=1}){
        //using template string
        console.log(`Order received! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    },
    orderPizza: function(mainIngredient, ...ortherIngredient){
        console.log(mainIngredient)
        console.log(ortherIngredient)
    }
    
};
// with spread 
    // sread, because on RIGHT side of =
const arr = [1,3, ...[3,4]]
console.log(arr)

// rest pattern because on LEFT side of =
const [a,b,...rest]  = [1,2,3,4,5] // a = 1 , b = 2 , rest = [3,4,5]
// rest must be the last element
    //err : const [a,...rest,b] = [1,2,3,4,5]
    //correct = const [a,b,...rest] = [1,2,3,4,5]

// Objects 
const {thu,fri, ...restArr} = restaurant.openingHours
console.log(restArr)
//function 
const  add = function(...rest){
    let a =rest.reduce((init,currentEle)=> init += currentEle)
    console.log(a)
}
add(2,4)
add(2,4,6)
add(2,4,7)
let arr2 = [1,2,3,4,5,6,7]
add(...arr2) // spread

//order pizza
restaurant.orderPizza('fish','onion','salad','tomato')