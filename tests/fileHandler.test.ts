import { fileReader } from '../utils/fileReader';

describe('fileReader', () => {
    it('reads file line by line and converts to array', () => {
        const expectedResult = ['Match: 01', 'Person A vs Person B', '0', '0', '0', '0', 'Match: 02', 'Person A vs Person C', '1', '1', '0', '0',]

        const file = fileReader('full_tournament.txt');

        expect(file).toEqual(expectedResult);
    })
})