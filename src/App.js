import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './pages/Info'
import Detail from './pages/Detail'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' component={Info} exact />
          <Route path='/detail/:id' component={Detail} exact />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
