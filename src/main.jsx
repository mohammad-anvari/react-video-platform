import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App.jsx'
import './tailwind.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Fonts/irsans_p30download.com.ttf'
import './Css/item.css'
import { Provider } from 'react-redux';
import store from './Redux/store.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
