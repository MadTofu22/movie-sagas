import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieForm extends Component {

    state = {
        title: '',
        poster: '',
        description: '',
        genre_id: null
    }

    componentDidMount () {
        this.getGenres();
    }

    // This function handles populating the redux store with the genres in the DB
    getGenres = () => {
        this.props.dispatch({type: 'FETCH_GENRES'});
    }

    // This function handles updating the local state when inputs are being filled in
    handleChange = (event, input) => {
        this.setState({
            ...this.state,
            [input]: event.target.value
        });
        console.log('state:', this.state)
    }

    // This function handles submiting the form and adding the new movie to the DB
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state});
    }

    // This function handles cancelling the input and returning the user to the home page
    handleCancel = () => {
        this.props.history.push('/');
    }

    render () {
        return (
            <>
            <h1>Add a New Movie!</h1>
            <div className='movieForm'>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <table className='inputTable'>
                        <thead>
                            <tr>
                                <th><label htmlFor='titleInput'>Movie Title</label></th>
                                <th><label htmlFor='posterInput'>Poster URL</label></th>
                                <th><label htmlFor='genreInput'>Genre</label></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input required type='text' name='titleInput' placeholder='Movie Title' onChange={event => this.handleChange(event, 'title')}/></td>
                                <td><input type='text' name='posterInput' placeholder='Poster URL' onChange={event => this.handleChange(event, 'poster')}/></td>
                                <td><select name='genreInput' placeholder='Genre' onChange={event => this.handleChange(event, 'genre_id')}>
                                    <option></option>
                                    {this.props.reduxState.genres.map(genre => {
                                        return <option key={genre.id} value={genre.id}>{genre.name}</option>;
                                    })}
                                </select></td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='inputTable'>
                            <thead>
                                <tr>
                                    <th><label htmlFor='descriptionInput'>Description</label></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td><textarea cols='51' rows='10' name='descriptionInput' placeholder='Movie Description' onChange={event => this.handleChange(event, 'description')}/></td>
                                </tr>
                            </tbody>
                    </table>
                    <div className='formButtons'>
                        <button className='moviesButton' onClick={this.handleCancel}>Cancel</button>
                        <button className='moviesButton' onClick={this.submit}>Add Movie</button>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

const reduxProps = (reduxState) => ({reduxState});
const MovieFormWithRouter = withRouter(MovieForm);
export default connect(reduxProps)(MovieFormWithRouter)