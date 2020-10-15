import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './productDisplay/LandingPage';
import OfferPage from './productDisplay/OfferPage';

const App = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        {/* <LandingPage /> */}
        <Router>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/offers" render={() => <OfferPage />} />
        </Router>
      </div>
    </div>
  );
}

export default App;


