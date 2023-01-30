// datastructure
//Maps
//with obj ket always is string but with Map we can use every datatypes for key like : string number boolean Nan Obj
const map = new Map();
map.set('name','Italty restaurant')
map.set(1, 'Firenze, Italy')
map.set(2, 'Lisbon, Portugal')
map
.set('categories',['Pizza','Tomato'])
.set('open',11)
.set('close',21)
.set(false, 'We are close')
.set(true,'We are open')
console.log(map)

// we can get value with key of value
// console.log(map.get(true)) // we are open
let time = 21
console.log(map.get(time > map.get('open') && time < map.get('close'))) // true or false 
console.log(map.has(true)) // check if the key exist result : true 
console.log(map.size) // 8
//clear
// console.log(map.clear)


//example about Map
map.set([1,3], 'checkitout')
console.log(map.get([1,3])) /* undefined because arr is a reference value so we its not the same 
 if we want to get this value we can do this
*/
let a = [1,5]
map.set(a,'Checkkkk')
console.log(map.get(a)) // Checkkkk




