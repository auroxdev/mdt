import { useState, useEffect } from 'react';
import { useNuiEvent } from '@/hooks/useNuiEvent';
import { fetchNui } from '@/utils/fetchNui';
import Header from './components/Header';
import Navbar from './components/Navbar';

export default function MDT() {
  const [visible, setVisible] = useState(false);

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
      <div className='flex flex-col h-5/6 w-5/6 rounded-md border-2 border-solid border-zinc-750 drop-shadow-md'>
        <Header />
        <div className='flex h-full w-full bg-zinc-700 gap-6 p-6'>
          <Navbar />
          <div className='flex h-full w-full bg-zinc-750'></div>
        </div>
      </div>
    </div>
  );
}