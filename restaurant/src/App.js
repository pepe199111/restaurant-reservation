import React from 'react';
import { HashRouter as Router, Switch, Route, } from "react-router-dom";
import BookingProvider from './context/BookingContext';

import './App.scss';
import './base/style.scss';

import Slides from './components/Slides/Slides';

import Header from './pages/Header/Header';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Booking from './pages/Booking/Booking';
import Footer from './pages/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <BookingProvider>
          <Switch>
            <Route path='/' exact>
              <Header />
              <Slides />
              <About />
              <Menu />
              <Footer />
            </Route>
            <Route path='/booking' component={Booking} />
          </Switch>
        </BookingProvider>
      </Router>
    </div>
  );
};

export default App;
