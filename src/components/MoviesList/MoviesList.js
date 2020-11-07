import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';


class MoviesList extends Component {

    componentDidMount() {
        this.getMovies();
    }

    // This function handles populating the redux store with the movies in the DB
    getMovies = () => {
        this.props.dispatch({type: 'FETCH_MOVIES'});
    }

    render() {
        return (
            <>
                {/* {JSON.stringify(this.props.reduxState.movies)} */}
                {this.props.reduxState.movies.map(movie => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MoviesListWithRouter = withRouter(MoviesList);
export default connect(reduxProps)(MoviesListWithRouter)