var lineReader = require('line-reader');

export const fileReader = (file: string) => {
    const data: string[] = [];
    lineReader.eachLine(file, function (line, last) {
        data.push(line);

        if (last) {
            return false;
        }
    });
    return data;
}
