import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.scss';
import './assets/fonts/Oswald-ExtraLight.ttf';
import './assets/fonts/Oswald-Light.ttf';
import './assets/fonts/Oswald-Medium.ttf';
import './assets/fonts/Oswald-Regular.ttf';
import './assets/fonts/Oswald-SemiBold.ttf';
import './assets/fonts/Oswald-Bold.ttf';
import App from './App';
import { IsopenContextProvider } from './context/isopenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <IsopenContextProvider>
      <App />
  </IsopenContextProvider>
    </React.StrictMode>
);

