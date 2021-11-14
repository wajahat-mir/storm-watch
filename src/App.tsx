import React from 'react';
import Current from './components/Current'
import History from './components/History'
import Error from './components/Error'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path='/' component={Current} />
          <Route path='/history' component={History} />
          <Route component={Error}/>
        </Switch>
      </main>
    </>
    
  );
}

export default App;
