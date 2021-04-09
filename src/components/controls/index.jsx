import { useContext } from 'react';

import GameContext from '../../contexts/game';

import style from './style.module.scss';

import table from '../../assets/menu-side.png';
import iconPlay from '../../assets/menu-play.png';
import iconPlayDisabled from '../../assets/menu-play-disabled.png';

const Controls = () => {
    const {
        mode,
        bet,
        addBet,
        remBet,
        play,
        playing,
        lastWin,
        balance
    } = useContext(GameContext);

    return <div className={style.container}>
        <div className={`${style.table} ${style.left}`}>
            <img className={style.background} src={table} alt={"table"} />
            <div className={style.content}>
                <div className={style.contentBox}>
                    <div className={style.contentData}>{mode}</div>
                    <label className={style.contentTitle}>MODE</label>
                </div>
                <div className={style.contentBox}>
                    <div className={style.contentData}>
                        <button className={style.contentDataLeft} onClick={remBet} >-</button>
                        <label className={style.contentDataCenter}>{bet}</label>
                        <button className={style.contentDataRight} onClick={addBet} >+</button>
                    </div>
                    <label className={style.contentTitle}>BET</label>
                </div>
            </div>
        </div>
        <button className={style.buttonPlay} onClick={play}>
            <img src={!playing ? iconPlay : iconPlayDisabled} alt={"play button"} />
        </button>
        <div className={`${style.table} ${style.right}`}>
            <img className={style.background} src={table} alt={"table"} />
            <div className={style.content}>
                <div className={style.contentBox}>
                    <div className={style.contentData}>{lastWin ? lastWin.points : 0}</div>
                    <label className={style.contentTitle}>LAST WIN</label>
                </div>
                <div className={style.contentBox}>
                    <div className={style.contentData}>{balance}</div>
                    <label className={style.contentTitle}>BALANCE</label>
                </div>
            </div>
        </div>
    </div>
}

export default Controls;