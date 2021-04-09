import { Link } from 'react-router-dom';

import style from './style.module.scss';

import background from '../../assets/background-level-without-logo.png';
import redRectangle from '../../assets/frame_red.png';
import greenRectangle from '../../assets/frame_green.png';
import logo from '../../assets/logo-small.png';

const ModePage = () => {
    return <div className={style.container}>
        <img className={style.background} src={background} alt={'background level'} />
        <div className={style.content}>
            <img className={style.logo} src={logo} alt={"logo"} />
            <div className={style.modeContainer}>
                <Link to={'/game/normal'} className={`${style.buttonMode} ${style.buttonModeNormal}`}>
                    <img className={style.backgroundButton} src={redRectangle} alt={"red rectangle"} />
                    <div className={style.content}>
                        <h3>NORMAL MODE</h3>
                        <p>Normal mode (game without additional bonuses)</p>
                    </div>
                </Link>
                <Link to={'/game/eco'} className={`${style.buttonMode} ${style.buttonModeEco}`}>
                    <img className={style.backgroundButton} src={greenRectangle} alt={"green rectangle"} />
                    <div className={style.content}>
                        <h3>ECO MODE</h3>
                        <p>Eco-fiendly mode with increased chances of winning! And each win will donate 0.01% to an eco-fund</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}

export default ModePage;