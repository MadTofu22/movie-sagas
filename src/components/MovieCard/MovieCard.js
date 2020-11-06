import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieCard extends Component {

    render () {
        return (
            <>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MovieCardWithRouter = withRouter(MovieCard);
export default connect(reduxProps)(MovieCardWithRouter)