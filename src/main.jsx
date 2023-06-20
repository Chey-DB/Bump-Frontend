import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from '../src/components/Calendar/store';
import {Provider} from 'react-redux';
import { AuthProvider } from "./Context";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
