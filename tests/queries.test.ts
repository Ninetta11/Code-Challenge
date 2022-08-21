
import { matchResult, playerResult } from '../queries/queries';

describe('matchResult query', () => {
    it('logs correct match result', () => {
        console.log = jest.fn();
        const data = ['Match: 01', 'Person A vs Person B', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', 'Match: 02', 'Person C vs Person D', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',]
        const match = '02';
        const expectedResult = `Person C defeated Person D
            2 sets to 0`;

        matchResult(data, match);

        expect(console.log).toHaveBeenCalledWith(expectedResult);
    })
    it('logs error message when match ID does not exist in data', () => {
        console.log = jest.fn();
        const data = ['Match: 01', 'Person A vs Person B', '0', '0', '0', '0', '1', '0', '0', '0', '0', 'Match: 02', 'Person C vs Person D', '0', '0', '0',]
        const match = '03';
        const expectedResult = 'Match not found';

        matchResult(data, match);

        expect(console.log).toHaveBeenCalledWith(expectedResult);
    })
})

describe('playerResult query', () => {
    it('logs player result', () => {
        console.log = jest.fn();
        const playerName = 'Person A';
        const expectedResult = '23 17'

        playerResult(playerName);

        expect(console.log).toHaveBeenCalledWith(expectedResult);
    })
})