import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import GenreTag from '../GenreTag/GenreTag';

class DetailsView extends Component {
    
    componentDidMount () {
        this.getTags(this.props.match.params.id);
    }

    // This function handles populating the redux store with the genre tags linked to the currently displayed movie
    getTags = (id) => {
        this.props.dispatch({type: 'FETCH_TAGS', payload: id});
    }

    // This function creates the alternate text for the poster image
    createAltText = (title) => {
        return `Poster image for the movie ${title}`;
    }

    // This function handles the click event for the return to movies button
    handleClick = () => {
        this.props.history.push('/');
    }

    render () {
        const movieId = this.props.match.params.id ? this.props.match.params.id : 0;
        const movie = this.props.reduxState.movies[movieId-1] ? this.props.reduxState.movies[movieId-1] : {};
        return (
            <>
            <h1>{movie.title}</h1>
            <div className='detailsContainer'>
                <img className='detailsPoster' src={movie.poster} alt={this.createAltText(movie.title)} />
                
                <div className='detailsTextBlock'>
                    <h2 className='detailsHeader'>Description:</h2>
                    <p className='detailsDescription'>{movie.description}</p>
                    <h2 className='detailsHeader'>Genres:</h2>
                    <section className='detailsTags'>
                        {this.props.reduxState.tags.map(tag => {
                            return <GenreTag key={tag.genres_id} tag={tag} />;
                        })}
                    </section>
                    <button className='returnButton' onClick={this.handleClick}>Return to Movies</button>
                </div>
            </div>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const DetailsViewWithRouter = withRouter(DetailsView);
export default connect(reduxProps)(DetailsViewWithRouter)