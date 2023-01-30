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
    location: 'Van tien dung ',
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
// Set just collection of unique value  that mean set can never have duplicates value like this:
const ordersSet = new Set(['pasta','pizza','pizza']);// return an obj
// console.log(ordersSet) // {'pasta','pizza'}
// size of obj
console.log(ordersSet.size)//2
// check if element exist
console.log(ordersSet.has('pizza')) // true
console.log(ordersSet.has('pizzasdasd')) // false
// add element
ordersSet.add('tomato')
//delete element
ordersSet.delete('tomato')
console.log(ordersSet)
//deleteall 
// console.log(ordersSet.clear())
// we cant get value  out of sets with manual way 


//using looping to get value 
for(let item of ordersSet){
    console.log(item)
}
//if input value not an Array it will be return each characters and there are no duplicates
console.log(new Set('pasta')) // {p,a,s,t}

//Sets use to remote dupplicates element
const staff = ['chef','waiter','manager','chef']
const newArr = [...new Set(staff)]
console.log(newArr) //