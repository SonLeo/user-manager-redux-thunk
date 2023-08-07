import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/new-post" element={<PostForm />} />
          <Route path="/edit-post/:id" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
