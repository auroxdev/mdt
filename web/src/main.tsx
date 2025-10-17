import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { isEnvBrowser } from './utils/isBrowser';
import App from './App';
import './main.css';

if (isEnvBrowser()) {
  const root = document.getElementById('root');

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = `url('https://i.imgur.com/3pzRj9n.png')`;
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);