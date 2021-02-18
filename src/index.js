import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Website from './components/Website';
import './css/index.css';

ReactDOM.render(
  <Router>
    <Website />
  </Router>,
  document.getElementById('root')
);