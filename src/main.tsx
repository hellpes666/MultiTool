import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router';
import Weather from './components/Weather/Weather.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route
              path='/'
              element={<App />}
            />
            <Route
              path='/weather'
              element={<Weather />}
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
