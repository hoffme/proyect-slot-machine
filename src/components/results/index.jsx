import { useContext, useEffect, useState } from 'react';

import GameContext from '../../contexts/game';

import buttonBackground from '../../assets/frame-win.png';

import style from './style.module.scss';

const Results = ({ time }) => {
    const { playing, stop } = useContext(GameContext);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!playing) return () => {}; 

        const timeout = setTimeout(() => setShow(true), time);

        return () => clearTimeout(timeout);
    }, [time, playing, setShow])

    if (!show) return null;

    const close = () => {
        setShow(false);
        stop();
    }

    return <>
        <div className={style.clickClose} onClick={close} />
        <div className={style.container}>
            <div className={style.points}>
                <img src={buttonBackground} alt={'background button'} />
                <label className={style.content}>{playing.points}</label>
            </div>
        </div>
    </>
}

export default Results;