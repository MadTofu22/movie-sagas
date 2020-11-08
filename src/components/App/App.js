import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
// Import components
import MoviesList from '../MoviesList/MoviesList';
import DetailsView from '../DetailsView/DetailsView';


class App extends Component {

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path='/' component={MoviesList} />
          <Route path='/details/:id' component={DetailsView} />
        </Router>
      </div>
    );
  }
}

const reduxProps = (reduxState) => ({reduxState});
export default connect(reduxProps)(App);
