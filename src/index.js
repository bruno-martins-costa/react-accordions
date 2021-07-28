import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
  document.getElementById('root')
);
