import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Header from './components/Header'
import Main from './pages/Main'
import Error from './pages/Error'

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/user" element={<Main />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

