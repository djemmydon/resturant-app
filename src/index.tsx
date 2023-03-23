import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { productsApi } from './redux/apiSlice';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <ApiProvider api={productsApi}>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </ApiProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
