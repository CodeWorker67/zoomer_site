import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { capturePartnerFromUrl } from '@utils/partner';
import { captureSearchEngineStamp, captureStampFromUrl } from '@utils/stamp';

capturePartnerFromUrl();
captureStampFromUrl();
captureSearchEngineStamp();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
