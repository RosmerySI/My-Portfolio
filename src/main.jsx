import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import MyPortfolio from './MyPortfolio';
import './styles/myPortfolio.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <MyPortfolio />
    </BrowserRouter>
  </React.StrictMode>,
)
