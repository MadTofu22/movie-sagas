import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieCard extends Component {

    // This function handles the click event for the poster image
    handlePosterClick = (movie) => {
        console.log('poster clicked, id:', movie.id);
        const path = `/details/${movie.id}`;
        this.props.history.push(path);
    }

    // This function creates the alternate text for the poster image
    createAltText = (title) => {
        return `Poster image for the movie ${title}`;
    }

    render () {
        const movie = this.props.movie;
        return (
            <>
            {/* {JSON.stringify(movie)} */}
            <div className='movieContainer'>
                <img className='cardPoster' src={movie.poster} alt={this.createAltText(movie.title)} onClick={()=>this.handlePosterClick(movie)} />
                <div className='movieTextBlock'>
                    <h2>{movie.title}</h2>
                    <div className='movieDescription'>
                        <p>{movie.description}</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MovieCardWithRouter = withRouter(MovieCard);
export default connect(reduxProps)(MovieCardWithRouter)