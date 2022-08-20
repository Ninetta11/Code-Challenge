
import { matchResult, playerResult } from '../queries';

describe('matchResult query', () => {
    it('logs match result', () => {
        console.log = jest.fn();
        const match = '01';
        const expectedResult = `Person A defeated Person B
        2 sets to 0`;

        matchResult(match);

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