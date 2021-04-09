const lines = [ // Sets(...[columnIndex, rowIndex])
    new Set([[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]]),
    new Set([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]),
    new Set([[0, 1], [1, 1], [2, 1], [3, 1], [4, 1]]),
    new Set([[0, 2], [1, 2], [2, 2], [3, 2], [4, 2]]),
    new Set([[0, 0], [1, 1], [2, 2], [3, 1], [4, 0]]),
    new Set([[0, 2], [1, 1], [2, 0], [3, 1], [4, 2]]),
    new Set([[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]]),
    new Set([[0, 1], [1, 0], [2, 0], [3, 0], [4, 1]]),
    new Set([[0, 1], [1, 2], [2, 2], [3, 2], [4, 1]]),
    new Set([[0, 2], [1, 2], [2, 1], [3, 0], [4, 0]]),
    new Set([[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]]),
];

const LinesNormal = lines.slice(0, 7);
const LinesEco = [...lines];

const calculateLineWin = (tab, line) => {
    const lineSymbols = [];
    let points = 0;

    for (const position of line) {
        const symbol = tab[position[0]][position[1]];

        if (lineSymbols.length > 0 && !symbol.bonus) {
            for (const symbolSaved of lineSymbols) {
                if (symbolSaved.bonus) continue;
                if (symbolSaved.id !== symbol.id) return null;
                break;
            }
        }

        lineSymbols.push({ ...symbol, position });
        points += symbol.point;
    }

    return { symbols: lineSymbols, points };
}

const calculateLinesWin = (tab, lines) => {
    const result = [];
    
    lines.forEach(line => {
        const lineWin = calculateLineWin(tab, line);
        if (lineWin) result.push(lineWin);
    });

    return result;
}

export default calculateLinesWin;
export {
    LinesNormal,
    LinesEco
}