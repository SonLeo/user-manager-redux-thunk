import { GET_ALL_USERS_SUCCESS } from '../actions';

const initialState = {
  allUsers: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
      };
  
    default:
      return state;
  }
};

export default usersReducer;
