import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Main from './components/Main';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>
);