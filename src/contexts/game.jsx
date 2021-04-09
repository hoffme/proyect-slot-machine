import { createContext, useState } from "react";
import calculateLinesWin, { LinesEco, LinesNormal } from "../configs/lines";

import getSymbols from '../configs/symbols';
import Tab from '../models/tab';

const GameContext = createContext();

const GameContextProvider = ({ mode, children }) => {
    const startTime = new Date();

    const [rows, columns, rowsAdded] = [3, 5, 100];
    const lines = mode === 'eco' ? LinesEco : LinesNormal;

    const newTab = () => new Tab(rows, columns, () => getSymbols(mode));

    const [bet, setBet] = useState(50);
    const [balance, setBalance] = useState(500);
    const [tab, setTab] = useState(newTab());
    const [plays, setPlay] = useState([]);
    const [playing, setPlaying] = useState(null);

    const play = () => {
        if (playing || balance < bet) return;

        const finalTab = tab.generateFullTab(rowsAdded);
        const linesWin = calculateLinesWin(finalTab.result, lines);

        const play = {
            ...finalTab,
            linesWin,
            points: linesWin.reduce((total, line) => total + line.points, 0),
            bet
        }

        setPlaying(play);
    }

    const stop = () => {
        setBalance(balance - playing.bet + playing.points);
        setPlay([...plays, playing]);
        setPlaying(null);
        setTab(newTab());
        setBet(50);
    }

    const symbolSelected = (col, row) => {
        if (playing) {
            for (const line of playing.linesWin) {
                for (const symbol of line.symbols) {
                    if (symbol.position[0] === col && symbol.position[1] === row) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    return <GameContext.Provider value={{
        rows,
        columns,
        rowsAdded,
        mode,
        balance,
        notAction: balance < 10,
        lastWin: plays.length > 0 ? plays[plays.length - 1] : null,
        bet,
        addBet: () => bet < 100 && setBet(bet + 10),
        remBet: () => bet > 10 && setBet(bet - 10),
        play,
        stop,
        playing,
        symbolSelected,
        tab: tab.tab,
        startTime
    }}>
        {children}
    </GameContext.Provider>
}

export default GameContext;
export { GameContextProvider };