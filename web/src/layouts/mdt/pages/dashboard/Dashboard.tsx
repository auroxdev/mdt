export default function Dashboard() {
  return (
    <div className='flex flex-row size-full font-robotoflex text-zinc-300 justify-between gap-5'>
      <div className='flex flex-col size-full justify-center rounded-md drop-shadow-md gap-5'>
        <div className='flex flex-row h-1/3 w-full justify-between rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-zinc-450 leading-none'>ANNOUNCEMENTS</p>
          </div>
        </div>
        <div className='flex flex-row justify-between size-full gap-5'>
          <div className='flex flex-col size-full justify-between gap-5'>
            <div className='flex flex-col size-full justify-between rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-zinc-450 leading-none'>LATEST INCIDENTS</p>
              </div>
            </div>
            <div className='flex flex-col size-full justify-between rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-zinc-450 leading-none'>LATEST REPORTS</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col size-full justify-between gap-5'>
            <div className='flex flex-col size-full justify-between rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-zinc-450 leading-none'>LATEST WARRANTS</p>
              </div>
            </div>
            <div className='flex flex-col size-full justify-between rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
              <div className='flex flex-col gap-2'>
                <p className='font-semibold text-zinc-450 leading-none'>LATEST BOLOS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row h-full w-1/3 justify-between rounded-md border border-zinc-650 bg-zinc-750 drop-shadow-md p-3'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold text-zinc-450 leading-none'>ACTIVE UNITS</p>
        </div>
      </div>
    </div>
  );
}