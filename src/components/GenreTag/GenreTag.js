import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class GenreTag extends Component {

    // This functions handles finding the index of the tag name in the genres array
    getGenreIndex = (genres, tag) => {
        for(let genre of genres) {
            if (genre.id === tag.genres_id) {
                return genres.indexOf(genre);
            }
        }
    }

    render () {
        const genres = this.props.reduxState.genres;
        const tag = this.props.tag;
        const index = this.getGenreIndex(genres, tag);

        console.log('genreIndex:', index);
        return (
            <div className='genreTag'>
                <p>{genres[index] ? genres[index].name : ''}</p>
            </div>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const GenreTagWithRouter = withRouter(GenreTag);
export default connect(reduxProps)(GenreTagWithRouter);