import { useContext } from 'react';
import GameContext from '../../contexts/game';

import style from './style.module.scss';

const Reel = ({column, delay = 0}) => {
    const {tab, playing, symbolSelected, rowsAdded} = useContext(GameContext);

    const contentStyle = { animationDelay: `${delay}s` }
    const contentClass = `${style.content} ${playing ? style.scroll : ''}`;

    return <div className={style.container}>
        <div className={contentClass} style={contentStyle} >{
            (playing ? playing.fullTab : tab)[column].map((symbol, row) => {

                const diselected = (row >= rowsAdded) ? !symbolSelected(column, row - rowsAdded) : false;
                
                return <img
                    src={symbol.icon.src} 
                    alt={symbol.icon.alt} 
                    className={diselected ? style.diselected : ''} 
                    key={row}
                />;
            })
        }</div>
    </div>
}

export default Reel;