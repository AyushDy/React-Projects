import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from './store/store.js'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


createRoot(document.getElementById('root')).render(
   <Provider store={store}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
   </Provider>,
)
