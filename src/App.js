
import Login from './Login';
import {BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './Home';
import { SecuredRoute } from './Login';

function App() {
  return (
    <>
     <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Login}/>
     <SecuredRoute exact path="/home" component={Home}/>
     <Redirect to="/" />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
