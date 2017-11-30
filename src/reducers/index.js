import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// telling Redux what is the application state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
