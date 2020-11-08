import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class DetailsView extends Component {

    // This function creates the alternate text for the poster image
    createAltText = (title) => {
        return `Poster image for the movie ${title}`;
    }

    render () {
        const movie = this.props.movie ? this.props.movie : {};
        return (
            <>
            {/* {JSON.stringify(this.props.movie)} */}
            <h1>{movie.title}</h1>
            <div className='detailsContainer'>
                <img className='detailsPoster' src={movie.poster} alt={this.createAltText(movie.title)} />
                
                <div className='detailsTextBlock'>
                    <h2 className='detailsHeader'>Description:</h2>
                    <p className='detailsDescription'>{movie.description}</p>
                    <h2 className='detailsHeader'>Genres:</h2>
                    
                </div>
            </div>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const DetailsViewWithRouter = withRouter(DetailsView);
export default connect(reduxProps)(DetailsViewWithRouter)