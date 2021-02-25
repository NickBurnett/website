import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Website from './components/Website';
import { updateNav } from './components/core/NavigationBar';
import './css/index.css';
let current_page = 'nav-home';
export function setCurrentPage(page) {
  current_page = page;
}
ReactDOM.render(
  <Router>
    <Website />
  </Router>,
  document.getElementById('root')
);
updateNav(current_page);