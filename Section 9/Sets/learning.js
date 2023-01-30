const game ={
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'mane',
            'mane2',
            'mane3',
            'mane4',
            'mane5',
            'mane6',
            'mane7',
            'mane8',
            'mane9',
            'mane10',
            'mane11',
        ],
        [
            'salah1',
            'salah2',
            'salah3',
            'salah4',
            'salah5',
            'salah6',
            'salah7',
            'salah8',
            'salah9',
            'salah10',
            'salah11',
        ],
    ],
    score: '4.0',
    srored:['salah10','salah7','mane','mane2','mane3'],
    date: 'Nov 9th, 2023',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    scorer : function(...players){
        console.log(...this.srored,...players)
    }
}
//1
for(let [i, scorer] of game.srored.entries()){
    console.log(`Goat ${i+1}: ${scorer}`)
}
//2
let odds = Object.values(game?.odds) 
let ave = 0
for (let odd of odds){
    // console.log(odd)
    ave += odd
}
ave/=odds.length
console.log(ave)
//3

for (let [name, value] of Object.entries(game.odds)){
    const check = name === 'x' ? 'draw' : 'thắng của ' + game[name]
    console.log(`Tỉ lệ ${check} là ${value}`)
}
