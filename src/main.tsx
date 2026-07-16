import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './index.css';
import App from './App.tsx';
import AnalyticsConsentBanner from './analytics/AnalyticsConsent.tsx';
import { initAnalytics } from './analytics/analytics.ts';

void initAnalytics();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AnalyticsConsentBanner />
  </StrictMode>
);
