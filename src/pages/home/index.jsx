import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

import background from '../../assets/background-splash.jpg';
import buttonBackground from '../../assets/frame-win.png';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loading = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(loading);
    }, [setLoading])

    return <div className={style.container}>
        <img className={style.background} src={background} alt={'background splash'} />
        <div className={style.buttonStart}>
            <img src={buttonBackground} alt={'background button'} />
            <div className={style.content}>
                {
                    loading ?
                        <div className={style.loader}><div className={style.bar}></div></div> :
                        <Link to={'/select-mode'}>START</Link>
                }
            </div>
        </div>
    </div>
}

export default HomePage;