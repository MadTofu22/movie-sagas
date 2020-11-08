import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';


class MoviesList extends Component {

  componentDidMount() {
    this.getMovies();
    this.getGenres();
  }

  // This function handles populating the redux store with the movies in the DB
  getMovies = () => {
    this.props.dispatch({type: 'FETCH_MOVIES'});
  }

  // This function handles populating the redux store with the genres in the DB
  getGenres = () => {
    this.props.dispatch({type: 'FETCH_GENRES'});
  }

  handleClick = () => {
    this.props.history.push('/add-movie')
  }
    
  render() {
    return (
      <>
        <button className='moviesButton' onClick={this.handleClick}>Add a Movie</button>
        <div className='moviesGrid'>
          {/* {JSON.stringify(this.props.reduxState.movies)} */}
          {this.props.reduxState.movies.map(movie => {
              return <MovieCard key={movie.id} movie={movie} />
          })}
        </div>
      </>
    );
  }
}

const reduxProps = (reduxState) => ({reduxState});
const MoviesListWithRouter = withRouter(MoviesList);
export default connect(reduxProps)(MoviesListWithRouter)