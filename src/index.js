import React from 'react';
import ReactDOM from 'react-dom';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
    M.AutoInit()
);
