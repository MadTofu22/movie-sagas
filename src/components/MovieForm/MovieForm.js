import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieForm extends Component {

    componentDidMount () {
        this.getGenres();
    }

    // This function handles populating the redux store with the genres in the DB
    getGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'});
    }

    render () {
        return (
            <>
            <h1>Add a New Movie!</h1>
            <div className='movieForm'>
                <form onSubmit={event => this.handleSubmit}>
                    <table>
                        <thead>
                            <th><label htmlFor='titleInput'>Movie Title</label></th>
                            <th><label htmlFor='posterInput'>Poster URL</label></th>
                            <th><label htmlFor='descriptionInput'>Description</label></th>
                            <th><label htmlFor='genreInput'>Genre</label></th>
                        </thead>
                        <tbody>
                            <td><input required type='text' name='titleInput' placeholder='Movie Title' onChange={event => this.handleChange(event, 'title')}/></td>
                            <td><input type='text' name='posterInput' placeholder='Poster URL' onChange={event => this.handleChange(event, 'poster')}/></td>
                            <td><input type='text' name='descriptionInput' placeholder='Movie Description' onChange={event => this.handleChange(event, 'description')}/></td>
                            <td><select name='genreInput' placeholder='Genre'>
                                {this.props.reduxState.genres.map(genre => {
                                    return <option value={genre.id}>{genre.name}</option>;
                                })}
                            </select></td>
                        </tbody>
                    </table>
                </form>
            </div>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MoviesFormWithRouter = withRouter(MoviesForm);
export default connect(reduxProps)(MoviesFormWithRouter)