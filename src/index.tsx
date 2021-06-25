import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importação do serviço do Firebase
import './services/firebase';

// Importação do estilo CSS
import './style/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


