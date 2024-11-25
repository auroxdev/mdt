import Header from './components/Header';
import Navbar from './components/Navbar';

export default function MDT() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
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