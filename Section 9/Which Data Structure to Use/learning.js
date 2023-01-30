const gameEvent = new Map([
    [17,'GOAL'],
    [36,'Substrimution'],
    [47,'GOAL'],
    [61,'Substrimution'],
    [64,'Yellow card'],
    [69,'Red card'],
    [70,'Substrimution'],
    [72,'Substrimution'],
    [76,'GOAL'],
    [90,'GOAL'],
    [92,'Yellow card'],
])

//1
let newArr = gameEvent.values()
let noDulicate = [... new Set(newArr)]
console.log(noDulicate)
//2
gameEvent.delete(64)
console.log(gameEvent)
//3
let time = [...gameEvent.keys()].pop()
console.log(`Có một sự kiện xảy ra, Trung bình mỗi ${time /gameEvent.size } phút`)
//4
for(let [time,value] of gameEvent){
    console.log(`${time < 45 ? `[FIRST HALF]` : `[SECOND HALF]`} : ${time}: ${value}`)
}