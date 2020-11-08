import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class DetailsView extends Component {
    
    componentDidMount () {
        // const movieId = this.props.movie ? this.props.movie.id : null;
        // this.getTags(this.props.movieId);
        // this.getGenres();
        // this.getMovies();
    }

    // This function handles populating the tagsArray in the redux store with the tags for the currently displayed movie
    // getTags = (id) => {
    //     this.props.dispatch({type: `FETCH_TAGS`, payload: id});
    // }

    // // This function handles populating the genresArray in the redux store
    // getGenres = () => {
    //     this.props.dispatch({type: `FETCH_GENRES`});
    // }

    // // This function handles populating the moviesArray in the redux store
    // getMovies = () => {
    //     this.props.dispatch({type: `FETCH_MOVIES`});
    // }

    // This function creates the alternate text for the poster image
    createAltText = (title) => {
        return `Poster image for the movie ${title}`;
    }

    render () {
        const movies = this.props.reduxState.movies ? this.props.reduxState.movies : [];
        const movie = movies[this.props.movieId-1];
        // const genres = this.props.genres ? this.props.genres : {};
        // const tags = this.props.reduxState.tags ? this.props.tags : {};
        return (
            <>
            {JSON.stringify(movie)}
            {/* <h1>{movie.title}</h1>
            <div className='detailsContainer'>
                <img className='detailsPoster' src={movie.poster} alt={this.createAltText(movie.title)} />
                
                <div className='detailsTextBlock'>
                    <h2 className='detailsHeader'>Description:</h2>
                    <p className='detailsDescription'>{movie.description}</p>
                    <h2 className='detailsHeader'>Genres:</h2>
                    {this.props.reduxState.tags.map(tag => {
                        return `${this.props.reduxState.genres[tag.genres_id]}, `;
                    })}
                </div>
            </div> */}
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const DetailsViewWithRouter = withRouter(DetailsView);
export default connect(reduxProps)(DetailsViewWithRouter)