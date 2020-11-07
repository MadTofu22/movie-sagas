import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class DetailsView extends Component {

    render () {
        const movie = this.props.reduxState.movies[this.props.id-1];
        return (
            <>
            {JSON.stringify(this.props.reduxState.movies[0])}
            {console.log(this.props)}
            <h1>Movie Title</h1>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const DetailsViewWithRouter = withRouter(DetailsView);
export default connect(reduxProps)(DetailsViewWithRouter)