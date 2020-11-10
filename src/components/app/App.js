import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import  HomePage  from '../pages/home-page';
import Loader from '../loader/loader'
import HeaderLayout from '../header/header-layout'
import FooterCompany from '../footer-company/footer-company'

import './app.css'

function App() {
  return (
    <main className='App background-main'>
      <HeaderLayout/>
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact/>

        <Route
          path='/soon'
          component={Loader}/>    
          <Redirect to='/' />
      </Switch>
      <FooterCompany/>
    </main>
  );
}

export default App;
