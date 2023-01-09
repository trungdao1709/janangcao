
let restaurant = {
    name : 'Classico Italiano',
    location: 'Van tien dung',
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
    }
    
};
//using detructuring obj with function
restaurant.orderDelivery({
    time: '23:30', 
    adress: 'van tien dung',
    mainIndex:2,
    starterIndex: 2,
})
/* destructuring obj in obj the order of elemens does not matter, we dont need 
manually to skip elements like array,
just write the name */

const {name, mainMenu, openingHours} = restaurant
console.log(name, mainMenu, openingHours) // name, mainMenu, openingHours in restaurant
// change the name of obj properties when using destructuring
const {name: newName} = restaurant // name in obj
console.log(newName)
// we can set default value in obj like arrays when we not sure that exist; example:
const {notExist = 'asdasd'} = restaurant //
console.log(notExist) //result is asdasd and if it not have default value so the result is undefined
//Mutating variables
let a = 12
let b = 99
let obj = {
    a : 23,
    b : 7,
    c: 14,
}
;({a, b} = obj) // we need ; before this
console.log(a,b) // 23, 7

// nested objs
const {fri:{open,close} } = openingHours; // we can change and set default value
console.log(open,close) // 11 23