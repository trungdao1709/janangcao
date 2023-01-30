let button = document.querySelector('button');
button.addEventListener('click',()=>{
    let textarea = document.querySelector('textarea').value;
    let arrName = textarea.split('\n')
    for(let [index,value] of arrName.entries()){
        let name = value.split('_')
        let newArr = [];
        for(let [index,value2] of name.entries()){
            if(index !== 0){
                let a = value2[0].toLocaleUpperCase() + value2.substring(1)
                newArr.push(a)
            }else{
                newArr.push(value2)

            }
            
        }
        console.log(newArr)
        console.log(`${newArr.join('').padEnd(15,' ')} ${`same `.repeat(index + 1)}`)
    }
})