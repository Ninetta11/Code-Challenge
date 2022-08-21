import { getPlayerNames, getMatchScore } from '../utils/utils';

describe('getPlayerNames', () => {
    it('returns two players names', () => {
        const data = 'Person A vs Person B';
        const expectedPlayer1 = "Person A";
        const expectedPlayer2 = "Person B";

        const { player1, player2 } = getPlayerNames(data);

        expect(player1).toEqual(expectedPlayer1);
        expect(player2).toEqual(expectedPlayer2);
    })
})

describe('getMatchScore', () => {
    it('returns match result', () => {
        const data = ['Match: 01', 'Person A vs Person B', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',]
        const expectedPlayer1Set = 2;
        const expectedPlayer2Set = 0;

        const { player1Set, player2Set } = getMatchScore(data);

        expect(player1Set).toEqual(expectedPlayer1Set);
        expect(player2Set).toEqual(expectedPlayer2Set);
    })
})

