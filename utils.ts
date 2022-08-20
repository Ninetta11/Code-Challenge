
export const findMatch = (matchId: string, data: string) => {
    const startOfRecord = data.indexOf(matchId);
    const endOfRecord = data.indexOf("Match:", startOfRecord);

    return data.slice(startOfRecord, endOfRecord);
}