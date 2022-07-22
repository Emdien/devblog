import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch } from 'react-redux'; 
import rootReducer from './store/rootReducer';


const store = configureStore({ reducer: rootReducer})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

