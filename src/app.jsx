import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import ModePage from './pages/mode';
import GamePage from './pages/game';

import style from './app.module.scss';

const App = () => {
  return <main className={style.container}>
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/select-mode'} component={ModePage} />
        <Route path={'/game/:mode'} component={GamePage} />
      </Switch>
    </BrowserRouter>
  </main>
}

export default App;