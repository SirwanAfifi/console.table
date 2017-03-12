'use strict';

console.table = (arr) => {

    let keys = Object.keys(arr[0]);

    const horizontalLine = '\r\n\x1b[34m' + '-'.repeat(12 * keys.length) + '\r\n\x1b[0m';

    let heading = '\x1b[35m' + Object.keys(arr[0]).join('\t') + '\x1b[0m';

    let str = horizontalLine;

    str += heading;

    arr.forEach((obj) => {

        str += horizontalLine + Object.values(obj).join('\t\t');

    });

    str += horizontalLine;

    console.log(str);

};

module.exports = console.table;