class Tab {
    constructor(rows, columns, getSymbolFunc) {
        this.rows = rows;
        this.columns = columns;
        this.getSymbolFunc = getSymbolFunc;

        this.tab = [];

        for (let x = 0; x < this.columns; x++) {
            this.tab[x] = [];
            for (let y = 0; y < this.rows; y++) {
                this.tab[x][y] = this.getSymbolFunc();
            }
        }
    }
    
    generateFullTab(reelSize = 100) {
        const result = []

        const fullTab = this.tab.map((column, columnIndex) => {
            const reel = [...column];
    
            for (let y = 0; y < reelSize; y++) {
                reel[y + column.length] = this.getSymbolFunc();
            }
    
            result[columnIndex] = reel.slice(-1 * column.length);
    
            return reel;
        });

        return { fullTab, result };
    }
}

export default Tab;