import { useParams } from 'react-router';

import { GameContextProvider } from '../../contexts/game';

import style from './style.module.scss';

import background from '../../assets/background-play.jpg';
import logo from '../../assets/logo-small.png';

import Controls from '../../components/controls';
import Reel from '../../components/reel';
import Results from '../../components/results';
import Survey from '../../components/survey';

const GamePage = () => {
    const { mode } = useParams('mode');

    return <GameContextProvider mode={mode}>
        <div className={style.container}>
            <img className={style.background} src={background} alt={"background"} />
            <div className={style.content}>
                <img className={style.logo} src={logo} alt={"logo"} />
                <div className={style.gameContent}>
                    <Reel column={0} />
                    <Reel column={1} delay={0.2} />
                    <Reel column={2} delay={0.4} />
                    <Reel column={3} delay={0.6} />
                    <Reel column={4} delay={0.8} />    
                </div>
                <Controls />
            </div>
            <Results time={5800} />
            <Survey />
        </div>
    </GameContextProvider>
}

export default GamePage;