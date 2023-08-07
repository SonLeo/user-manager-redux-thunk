import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
