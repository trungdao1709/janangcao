// ?? operator example
const obj = {
    name: 'foo',
    year: 2023
};
obj.age = 0
const age = obj.age || 3 // 3 because 0 is the falsy 
// nullist : undefined and null (NOT 0 or '' )
const correct = obj.age ?? 3 // 0
console.log(correct)