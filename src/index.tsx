import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { BetProvider } from './context/BetContext';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const renderer = createRenderer();

ReactDOM.render(
  <React.StrictMode>
    <BetProvider>
      <RendererProvider renderer={renderer}>
        <App />
      </RendererProvider>
    </BetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
