
export const getPlayerNames = (data: string) => {
    const playerNames = data.split('vs');
    const player1 = playerNames[0].trim();
    const player2 = playerNames[1].trim();
    return { player1, player2 }
}

export const getMatchScore = (data: string[]) => {
    var player1Points = 0;
    var player2Points = 0;
    var player1Games = 0;
    var player2Games = 0;
    var player1Set = 0;
    var player2Set = 0;

    data.forEach(line => {
        if (line == '0') {
            player1Points++
        }
        if (line == '1') {
            player2Points++
        }

        if (player1Points >= 4 && (player1Points >= player2Points + 2)) {
            player1Games++;
            player1Points = 0;
            player2Points = 0;
        } else if (player2Points >= 4 && (player2Points >= player1Points + 2)) {
            player2Games++;
            player1Points = 0;
            player2Points = 0;
        }

        if (player1Games === 6) {
            player1Set++;
            player1Games = 0;
            player2Games = 0;
        } else if (player2Games === 6) {
            player2Set++;
            player1Games = 0;
            player2Games = 0;
        }

        if (player1Set >= 2 || player2Set >= 2) {
            return;
        }

    })
    return { player1Set, player2Set };
}

export const getPlayerScore = (data: string[], playerName: string) => {
    var playerPoint = '';
    var opponentPoint = '';
    var playerPointsWon = 0;
    var playerPointsLost = 0;

    const { player1, player2 } = getPlayerNames(data[0]);
    if (playerName === player1) {
        playerPoint = '0';
        opponentPoint = '1';
    } else if (playerName === player2) {
        playerPoint = '1';
        opponentPoint = '0';
    }

    data.forEach(line => {
        if (line == playerPoint) {
            playerPointsWon++
        }
        if (line == opponentPoint) {
            playerPointsLost++
        }
    })

    return `${playerPointsWon} ${playerPointsLost}`
}

