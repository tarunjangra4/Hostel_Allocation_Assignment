import React  from 'react';
import {useState} from 'react';
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Homepage from './pages/Homepage';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import GirlsHostel from './pages/GirlsHostel';
import BoysHostel from './pages/BoysHostel';
import Floor from './pages/Floor';


function App(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/girlsHostel' component={GirlsHostel}/>
        <Route exact path='/boysHostel' component={BoysHostel}/>
        <Route exact path='/boyshostel/:id'>
            <Floor/>
          </Route>
        {/* <Route>
          <Login/>
        </Route> */}
      </Switch>
    </div>
  )
}





export default App;