import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class DetailsView extends Component {

    render () {
        const movie = this.props.reduxState.movies[this.props.match.params.id-1];
        return (
            <>
            {JSON.stringify(movie)}
            {console.log(this.props.match.params.id)}
            <h1>Movie Title</h1>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const DetailsViewWithRouter = withRouter(DetailsView);
export default connect(reduxProps)(DetailsViewWithRouter)