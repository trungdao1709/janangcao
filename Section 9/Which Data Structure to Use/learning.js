let restaurant = {
    name : 'Classico Italiano',
    location: 'Van tien dung ',
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
// Instead of using map.set to set the key- value we can do this
const question = new Map([
    ['question','What is the best programing language'],
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    ['correct',3],
    [true,'correct'],
    [false,'wrong'],
])
let answer = 3;
//quiz
console.log(question.get(answer === question.get('correct') ))
//Convert obj to map
const hourMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hourMap)
for(let [a,b] of hourMap) {
    console.log(a,b)// a = key , b value
}
console.log(question.keys())