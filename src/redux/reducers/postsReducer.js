import { GET_POSTS_SUCCESS, GET_POST_SUCCESS, ADD_POST_SUCCESS, UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS } from '../actions';

const initialState = {
  posts: [],
  currentPost: null
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };

    case GET_POST_SUCCESS: 
      return {
        ...state,
        currentPost: action.payload
      };
  
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
  
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
        currentPost: null
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        currentPost: state.currentPost && state.currentPost.id === action.payload ? null : state.currentPost,
      };

    default:
      return state;
  }
};

export default postsReducer;