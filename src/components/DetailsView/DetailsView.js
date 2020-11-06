import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class DetailsView extends Component {

    render () {
        return (
            <>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const DetailsViewWithRouter = withRouter(DetailsView);
export default connect(reduxProps)(DetailsViewWithRouter)