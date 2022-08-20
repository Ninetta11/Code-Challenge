import { findMatch } from '../utils';

describe('findMatch', () => {
    it('returns match data', () => {
        const matchId = '01';
        const data =
            `Match: 01 
        Person A vs Person B
        0
        0
        0
        0
        0
        0
        0
        Match: 02
        Person A vs Person C
        0
        0
        1
        1
        1
        1
        `
        const expectedResult =
            `01 
        Person A vs Person B
        0
        0
        0
        0
        0
        0
        0`

        const result = findMatch(matchId, data);

        expect(result).toMatch(expectedResult);
    })
})