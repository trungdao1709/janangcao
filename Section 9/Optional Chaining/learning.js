const weekday = ['mon','tue','wed','thu','fri','sat','sun']
// enhanced obj literal we can shortcut some thing in obj like this
let openingHours = {
    //enhance obj literals with name of obj  
    [weekday[0]]: {
        open: 12,
        close: 22
    },
    [weekday[3]]: {
        open: 11,
        close: 23
    },
    [weekday[5]]: {
        open: 0,
        close: 24
    },
} 

let restaurant = {
    name : 'Classico Italiano',
    location: 'Van tien dung',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //es6 enhanced obj literal
    openingHours,
    // make function order in the restaurant to get what customer want in starterMenu and mainMenu  
        // enhanced obj literal with function it still work
    order (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } ,
    // enhanced obj literal with function it still work
    orderDelivery({time=1,adress='no adress',mainIndex= 0,starterIndex=1}){
        //using template string
        console.log(`Order received! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`)
    },
    // enhanced obj literal with function it still work

    orderPizza(mainIngredient, ...ortherIngredient){
        console.log(mainIngredient)
        console.log(ortherIngredient)
    }
    
};

/* So we have 2 way to check if its really exist in the obj is : if else and && operator 
. And now have another shorter and more convenient way that using optional chaining
*/
// syntax ?.
    // console.log(restaurant.openingHours.mon.open) // error
// using otional chaining
// console.log(restaurant.openingHours?.mon?.open)// undefined
console.log(restaurant.openingHours.mon.open)
const days = ['mon','tue','wed','thu']
// some example
for(let day of days) {
    // console.log(day)
    //using enhanced obj literals
    const open = restaurant.openingHours[day]?.open ?? 'closed'
    console.log(`On ${day} We open at ${open}`)

}
//optinal chaining with methods 
console.log(restaurant.order?.(0,1) ?? 'Methos doesnt nexist')

//Arrays
const users = [
    {
        name: 'John',
        email: 'john@mail.com'
    }
]
console.log(users?.[0])
console.log(users?.[0]?.name)
