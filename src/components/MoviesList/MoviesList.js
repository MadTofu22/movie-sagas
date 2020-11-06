import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MoviesList extends Component {

    render () {
        return (
            <>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MoviesListWithRouter = withRouter(MoviesList);
export default connect(reduxProps)(MoviesListWithRouter)