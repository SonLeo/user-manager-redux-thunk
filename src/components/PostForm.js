import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addPost, getPost, updatePost, getAllUsers } from '../redux/actions';

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const currentPost = useSelector(state => state.posts.currentPost);
  const allUsers = useSelector(state => state.users.allUsers);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: -1
  });

  useEffect(() => {
    dispatch(getAllUsers());
    if (id) {
      dispatch(getPost(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (currentPost && id === currentPost.id) {
      setFormData({
        title: currentPost.title,
        content: currentPost.content,
        userId: currentPost.userId
      });
    } else if (allUsers.length > 0) {
      setFormData(formData => ({
        ...formData,
        userId: allUsers[0].id
      }));
    }
  }, [currentPost, id, allUsers]);

  const handleChange = (e) => {
    const value = e.target.name === 'userId' ? parseInt(e.target.value, 10) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updatePost(id, formData));
    } else {
      dispatch(addPost(formData));
    }
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Post' : 'New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </div>
        <div>
          <label>UserId</label>
          <select name="userId" value={formData.userId} onChange={handleChange}>
            {allUsers.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">{id ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
};

export default PostForm;
