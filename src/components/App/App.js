import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
// Import components
import MoviesList from '../MoviesList/MoviesList';
import DetailsView from '../DetailsView/DetailsView';


class App extends Component {
  componentDidMount() {
    this.getMovies();
}

// This function handles populating the redux store with the movies in the DB
getMovies = () => {
    this.props.dispatch({type: 'FETCH_MOVIES'});
}

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          {/* ADD PAGES! */}
          <Route exact path='/' component={MoviesList} />
          <Route path='/details/:id' component={(props)=>{return <DetailsView movie={this.props.reduxState.movies[props.match.params.id-1]}/>}} />
        </Router>
      </div>
    );
  }
}

const reduxProps = (reduxState) => ({reduxState});
export default connect(reduxProps)(App);
