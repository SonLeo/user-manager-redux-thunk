import axios from 'axios';

const BASE_URL = 'http://localhost:3001/posts';
const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

// Action types
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';

// Action creators
export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
});

export const addPostSuccess = (post) => ({
    type: ADD_POST_SUCCESS,
    payload: post,
});

export const deletePostSuccess = (post) => ({
    type: DELETE_POST_SUCCESS,
    payload: post,
});

export const getPostSuccess = (post) => ({
    type: GET_POST_SUCCESS,
    payload: post,
});

export const updatePostSuccess = (post) => ({
    type: UPDATE_POST_SUCCESS,
    payload: post,
});

export const getAllUsersSuccess = (users) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: users,
});

// Thunks
export const getPosts = () => async (dispatch) => {
    try {
        const response = await axios.get(BASE_URL);
        dispatch(getPostsSuccess(response.data));
    } catch (error) {
        console.error('Error fetching posts: ', error);
    }
};

export const addPost = (post) => async (dispatch) => {
    try {
        const response = await axios.post(BASE_URL, post);
        dispatch(addPostSuccess(response.data));
        alert('Post added successfully!');
    } catch (error) {
        console.error('Error adding post: ', error);
        alert('Error adding post');
    }
};

export const deletePost = (postId, post) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URL}/${postId}`, post);
        dispatch(deletePostSuccess(response.data));
        alert('Post deleted successfully!');
    } catch (error) {
        console.error('Error deleting post: ', error);
        alert('Error deleting post');
    }
};

export const getPost = (postId) => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/${postId}`);
        dispatch(getPostSuccess(response.data));
    } catch (error) {
        console.error('Error fetching post: ', error);
    }
};

export const updatePost = (postId, post) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URL}/${postId}`, post);
        dispatch(updatePostSuccess(response.data));
        alert('Post updated successfully!');
    } catch (error) {
        console.error('Error updating post: ', error);
        alert('Error updating post');
    }
};

export const getAllUsers = () => async (dispatch) => {
    try {
        const response = await axios.get(USER_API_URL);
        dispatch(getAllUsersSuccess(response.data));
    } catch (error) {
        console.error('Error fetching users: ', error);
    }
};