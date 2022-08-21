import { getPlayerNames, getMatchScore, getPlayerScore } from '../utils/utils';

// ### Query match result
// Query scores for a particular match
// Prints who defeated whom, and the result of the sets for the match (winning player score first).

// Query: `Score Match <id>`

// Example: `Score Match 01`

// Example output:

//     Person A defeated Person B
//     2 sets to 0

// ### Query games for player
// Prints a summary of games won vs lost for a particular player over the tournament
// Query: `Games Player <Player Name>`

// Example: `Games Player Person A`

// Example output:

//     23 17



export const matchResult = (data: string[], matchId: string) => {
    const startOfRecord = data.findIndex(element => element.includes("Match: " + matchId));

    if (startOfRecord === -1) {
        console.log('Match not found')
    } else {
        data = data.slice(startOfRecord);
        const { player1, player2 } = getPlayerNames(data[1]);
        const { player1Set, player2Set } = getMatchScore(data);
        var result = '';

        if (player1Set >= 2) {
            result = `${player1} defeated ${player2}
            ${player1Set} sets to ${player2Set}`;
        } else if (player2Set >= 2) {
            result = `${player2} defeated ${player1}
            ${player2Set} sets to ${player1Set}`;
        }
        console.log(result);
    }
}

export const playerResult = (data: string[], playerName: string) => {
    const startOfRecord = data.findIndex(element => element.includes(playerName));
    var playerScore: string = '';

    if (startOfRecord === -1) {
        console.log('Player not found')
    } else {
        data = data.slice(startOfRecord);
        playerScore = getPlayerScore(data, playerName);
    }
    console.log(playerScore)
}
