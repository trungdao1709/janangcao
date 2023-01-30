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

//get player 1 and player 2 or each team
const [player1,player2] = game.players
console.log(player1,player2)

//2
const[gk1, ...fieldPlayers1] = player1
const[gk2, ...fieldPlayers2] = player1

//3
const allPlayers = [...player1,...player2]
console.log(allPlayers)
//4
const playersFinal = [...player1,'Thiago','Coutinho','Perisic']
//5
const {team1, x: draw,team2} = game.odds
console.log(team1, draw, team2)
//6
game.scorer('salah')
//7
team1 > team2 && console.log('Team 1 win')