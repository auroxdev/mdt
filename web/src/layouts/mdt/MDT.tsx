import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'wouter';
import { useNuiEvent } from '@/utils/useNuiEvent';
import { fetchNui } from '@/utils/fetchNui';
import { isEnvBrowser } from '@/utils/isBrowser';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Profiles from './pages/profiles/Profiles';
import Incidents from './pages/incidents/Incidents';
import Reports from './pages/reports/Reports';
import Vehicles from './pages/vehicles/Vehicles';
import Charges from './pages/charges/Charges';

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
      <div className='flex flex-col size-[85%] rounded-md bg-zinc-725 border-2 border-solid border-zinc-750 drop-shadow-md'>
        <Header />
        <div className='flex size-full gap-5 p-5'>
          <Navbar />
          <div className='flex size-full'>
            <Switch>
              <Route path='/'><Dashboard /></Route>
              <Route path='/profiles'><Profiles /></Route>
              <Route path='/incidents'><Incidents /></Route>
              <Route path='/reports'><Reports /></Route>
              <Route path='/vehicles'><Vehicles /></Route>
              <Route path='/charges'><Charges /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}