import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
                {JSON.stringify(this.props.reduxState.movies)};
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MoviesListWithRouter = withRouter(MoviesList);
export default connect(reduxProps)(MoviesListWithRouter)