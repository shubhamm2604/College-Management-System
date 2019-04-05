import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import LoginAgain from '././components/LoginAgain/LoginAgain';
import LoginAgain2 from '././components/LoginAgain2/LoginAgain2';
import Login from '././components/Login/Login';
import Home from '././components/Home/Home';
import Homeacc from '././components/Homeacc/Homeacc';
import Student from '././components/Student/Student';
import Faculty from '././components/Faculty/Faculty';
import SearchStud from '././components/Student/SearchStud';
import UpdateStud from '././components/Student/UpdateStud';
import SearchId from './components/Student/SearchId';
import Updatefacult from './components/Faculty/Updatefacult';
import Searchfacult from './components/Faculty/Searchfacult';
import SearchFId from './components/Faculty/SearchFId';

const Routes = () => (
  <BrowserRouter >
      <Switch> 
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/homeacc" component={Homeacc}/>
          <Route path="/loginagain" component={LoginAgain}/>
          <Route path="/loginagain2" component={LoginAgain2}/>
          <Route path="/student" component={Student}/>
          <Route path="/faculty" component={Faculty}/>
          <Route path="/searchstud" component={SearchStud}/>
          <Route path="/updatestud" component={UpdateStud}/>
          <Route path="/searchId" component={SearchId}/>
          <Route path="/searchfacult" component={Searchfacult}/>
          <Route path="/updatefacult" component={Updatefacult}/>
          <Route path="/searchFId" component={SearchFId}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;