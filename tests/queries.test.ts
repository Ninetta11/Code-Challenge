
import { matchResult } from '../queries';

describe('matchResult query', () => {
    it('logs match result', () => {
        console.log = jest.fn();
        const query = 'Match 1';

        matchResult(query);

        expect(console.log).toHaveBeenCalledWith(query);
    })
})

describe('playerResult query', () => {
    it('logs player result', () => {
        console.log = jest.fn();
        const query = 'Person 1';

        matchResult(query);

        expect(console.log).toHaveBeenCalledWith(query);
    })
})