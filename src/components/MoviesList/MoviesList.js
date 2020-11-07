import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';


class MoviesList extends Component {

    render() {
        return (
            <div className='moviesGrid'>
                {/* {JSON.stringify(this.props.reduxState.movies)} */}
                {this.props.reduxState.movies.map(movie => {
                    return <MovieCard key={movie.id} movie={movie} />
                })}
            </div>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MoviesListWithRouter = withRouter(MoviesList);
export default connect(reduxProps)(MoviesListWithRouter)