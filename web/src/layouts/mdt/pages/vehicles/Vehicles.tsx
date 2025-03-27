import { Search } from '@carbon/icons-react';

export default function Vehicles() {
  return (
    <div className='flex flex-col size-full font-robotoflex text-zinc-300 justify-between gap-5'>
      <div className='flex h-10 w-full rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
        <div className='flex flex-row gap-2'>
          <Search className='text-zinc-450' />
          <p className='font-semibold text-zinc-450 leading-none'>SEARCH</p>
        </div>
      </div>
      <div className='flex size-full rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-zinc-450 leading-none'>VEHICLE</p>
        </div>
      </div>
    </div>
  );
}