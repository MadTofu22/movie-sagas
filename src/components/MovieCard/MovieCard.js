import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieCard extends Component {

    // This function creates the alternate text for the poster image
    createAltText = (title) => {
        return `Poster image for the movie ${title}`;
    }

    // This function handles the click event for the poster image
    handlePosterClick = (id) => {
        console.log('poster clicked, id:', id);
    }

    render () {
        const movie = this.props.movie;
        return (
            <>
            {/* {JSON.stringify(movie)} */}
            <div className='movieContainer'>
                <img className='cardPoster' src={movie.poster} alt={this.createAltText(movie.title)} onClick={()=>this.handlePosterClick(movie.id)} />
                <div className='movieTextBlock'>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                </div>
            </div>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MovieCardWithRouter = withRouter(MovieCard);
export default connect(reduxProps)(MovieCardWithRouter)