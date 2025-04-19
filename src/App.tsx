import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Episodes from '@/pages/Episodes';
import { routes } from '@/config/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.episodes} element={<Episodes />} />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
