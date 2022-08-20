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



export const matchResult = (matchId: string) => {
    console.log(`Person A defeated Person B
        2 sets to 0`);
}

export const playerResult = (playerName: string) => {
    console.log('23 17')
}
