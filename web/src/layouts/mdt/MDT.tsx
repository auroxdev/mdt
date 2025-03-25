import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useNuiEvent } from '@/utils/useNuiEvent';
import { fetchNui } from '@/utils/fetchNui';
import { isEnvBrowser } from '@/utils/isBrowser';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Profiles from './pages/profiles/Profiles';
import Reports from './pages/reports/Reports';
import PenalCode from './pages/penalcode/PenalCode';

export default function MDT() {
  const isDev = isEnvBrowser() && true || false;
  const [visible, setVisible] = useState(isDev);

  useNuiEvent('setVisible', (status: boolean) => setVisible(status));

  const handleEscape = (e: KeyboardEvent) => {
    if (visible &&e.key === 'Escape') {
      setVisible(false);
      fetchNui('closeMdt');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [visible]);

  return (
    <div className='h-screen w-screen items-center justify-center' style={{ display: visible ? 'flex' : 'none' }}>
      <div className='flex flex-col size-[85%] rounded-md border-2 border-solid border-zinc-750 drop-shadow-md'>
        <Header />
        <div className='flex size-full bg-zinc-700 gap-5 p-5'>
          <Navbar />
          <div className='flex size-full'>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path='profiles' element={<Profiles />} />
              <Route path='reports' element={<Reports />} />
              <Route path='penalcode' element={<PenalCode />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}