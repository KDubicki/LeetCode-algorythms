const convert = (s: string, numRows: number): any => {
    if (numRows < 2) return s;

    const column = 2 * numRows - 2;
    const rows: string[] = [];
    for (let i = 0; i < numRows; i++) rows[i] = '';

    // @ts-ignore
    [...s].forEach((ch, index) => {
        let position = index % column;
        position = (position < numRows) ? numRows - position - 1 : position - numRows + 1;
        rows[position] += ch;
    })

    return rows.reverse().reduce((curr, prev) => curr + prev, '');
};

