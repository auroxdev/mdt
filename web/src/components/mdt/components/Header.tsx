import { useState, useEffect } from 'react';
import AvatarDropdown from './AvatarDropdown';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(() => ({
    time: new Date().toLocaleTimeString('en-US', { hour12: false, hourCycle: 'h23' }),
    date: new Date().toLocaleDateString(),
  }));


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime({
        time: new Date().toLocaleTimeString('en-US', { hour12: false, hourCycle: 'h23' }),
        date: new Date().toLocaleDateString(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex bg-zinc-750 border-b border-zinc-600 justify-between items-center py-4 px-6 drop-shadow'>
      <div></div>
      <div className='flex flex-col items-center text-zinc-300 text-sm font-medium'>
        <p className='text-sm font-semibold leading-none'>{currentTime.time}</p>
        <p className='text-sm font-semibold leading-none pt-1'>{currentTime.date}</p>
      </div>
      <div className='flex flex-row items-center space-x-6'>
        <AvatarDropdown />
      </div>
    </div>
  );
}