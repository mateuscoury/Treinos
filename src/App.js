import React from 'react'
import { Route, Switch } from 'react-router';
import Dictionary from './Pages/Dictionary';
import Home from './Pages/home';
import Hooks from './Pages/HooksContextFunc'

class App extends React.Component {
  render(){
    return(
      <Switch>
        <Route path='/' exact render={(props)=><Home {...props}/>}/>
        <Route path='/dictionary' exact render={(props)=><Dictionary {...props}/>}/>
        <Route path='/hooks' exact render={(props)=><Hooks {...props}/>}/>
      </Switch>
    )
  }
}

export default App;
