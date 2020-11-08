import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_TAGS', fetchTags);
}

// Create the saga to handle async retrieval movies from server
function* fetchMovies() {
    try {
        const moviesArray = yield axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: moviesArray.data});
    } catch (error) {
        console.log(error);
    }
}

// Create the saga to handle async retrieval of genres from server
function* fetchGenres() {
    try {
        const genresArray = yield axios.get('/api/genre');
        yield put({type: 'SET_GENRES', payload: genresArray.data});
    } catch (error) {
        console.log(error);
    }
}

// Create saga to handle async retrieval of genre tags for a specific movie from the server
function* fetchTags(action) {
    try {
        const tagsArray = yield axios.get(`/api/joins/${action.payload}`);
        yield put({type: 'SET_TAGS', payload: tagsArray.data});
    } catch (error) {
        console.log(error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the genre tags
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
