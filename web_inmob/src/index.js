import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './js/components/index_page/Index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);