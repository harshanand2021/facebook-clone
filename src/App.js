import React from 'react';
import { Route,Switch } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import HeaderArea from './HeaderArea/HeaderArea';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/LoginPage' exact={true} Component={LoginPage}/>
        <Route path='/HeaderArea' exact={true} Component={HeaderArea}/>
      </Switch>
    </div>
  );
}

export default App;