let arr = [1,2,3,4]
// before using destructuring
//if u want to get items of array u have to do
let a = arr[0] // 1
let b = arr[1] // 2
let c = arr[2] // 3
let d = arr[3] // 4
// get items using destructuring 
// a1 = 1 b1 = 2 c1 = 3 d1 = 4
let [a1,b1,c1,d1] = arr
console.log(a1,b1,c1,d1) // 1 2 3 4 


let restaurant = {
    name : 'Classico Italiano',
    location: 'Van tien dung',
    categories : ['Italan', 'Pizzaria','Oragenic','Vegetarian'],
    starterMenu : ['Forcaccia', 'Bruschetta','Gralic bread','Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // make function order in the restaurant to get what customer want in starterMenu and mainMenu  
    order : function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }  
};

//get items of categories in restaurant using destructuring
    // let [first,second] = restaurant.categories
    //console.log(first,second) // Italan Pizzaria
// get first and third element in categories 
let [main ,, third] = restaurant.categories;
    // console.log(main,third) // Italan Oragenic
    // [first1, third ] = [third, first1]
/// example : switching variables

// not using destructuring

    // let temp = first1;
    // first1 = third;
    // third = temp;
    //console.log(first1,third) // Oragenic Italan

//using destructuring
    [main, third] =[third, main]; 
    console.log(main,third) // Oragenic Italan

  // using destructuring to receive the order of customer in the order function 
    let [startFood, mainFood] = restaurant.order(2,0)
    console.log(startFood,mainFood) //Gralic breadPizza

// using destructuring with nested Array
    let nested = [a,[b,c]];
    let [i,[j,k]] = nested
    console.log(i,j,k)
// default values
    const [q,r,h ] = [8,9]    
    console.log(q,r,h) // 8 9 undefined
    const [qq=1,rq=1,hq=1 ] = [8,9]    
    console.log(qq,rq,hq) // 8 9 1

    





