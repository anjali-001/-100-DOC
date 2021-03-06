import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Route} from 'react-router-dom'
import DataContextProvider from './context';


ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
    <Route>
    <App />
    </Route>
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
