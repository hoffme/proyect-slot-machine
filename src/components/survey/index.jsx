import { useContext, useState } from 'react';

import GameContext from '../../contexts/game';

import background from '../../assets/frame_green.png';

import style from './style.module.scss';

const Survey = ({ uri = '' }) => {
    const { notAction, mode, play, balance, startTime } = useContext(GameContext);

    const takeSurvey = () => ({
        game_mode: mode,
        play_count: play.length,
        balance,
        duration: new Date() - startTime
    })
    
    const [data, setData] = useState(null);
    if (notAction && !data) setData(takeSurvey());

    const params = () => Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');

    return <>
        <button className={style.button} onClick={() => setData(data ? null : takeSurvey())}>Take Survey</button>
        {data && <>
            <div className={style.container}>
                <div className={style.content}>
                    <img className={style.background} src={background} alt={'background'} />
                    <div className={style.text}>
                        Thanks for playing! <br />
                        Take the survey by clicking
                        <a href={`${uri}?${params()}`} >here!</a>                    
                    </div>
                </div>
            </div>
        </>}
    </>
}

export default Survey;