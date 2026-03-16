import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import './i18n/config';
import 'react-international-phone/style.css';

const GA_ID = 'G-FERLP17VV6';

function loadGoogleAnalytics() {
  if (typeof window === 'undefined' || !import.meta.env.PROD) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  script.onload = () => {
    gtag('js', new Date());
    gtag('config', GA_ID);
  };
}

function AppWithAnalytics() {
  useEffect(() => {
    const defer = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 0));
    defer(loadGoogleAnalytics);
  }, []);
  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppWithAnalytics />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
