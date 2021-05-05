import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./lib/font-awesome/css/all.min.css"
import './App.css';
import Add from './components/Add';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/WatchList';

import { GlobalProvider } from './context/GlobalState';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <GlobalProvider>
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={WatchList} />
        <Route path="/watched" component={Watched} />
        <Route path="/add" component={Add} />
      </Switch>
      <Footer/>
        </Router>
      </GlobalProvider>
      
 </Fragment>
    
  );
}

export default App;
