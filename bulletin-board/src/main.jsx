import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.jsx'
import { Provider } from 'react-redux'
import { fetchUsers } from './features/users/usersSlice.jsx'
import { fetchPosts } from './features/posts/postsSlice.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>,
)
