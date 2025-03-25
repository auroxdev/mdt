import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Home, UserMultiple, DocumentMultiple_01, ScalesTipped } from '@carbon/icons-react';
import clsx from 'clsx';
import { NavLink } from 'react-router';

interface NavButtonProps {
  icon: ReactNode;
  label: string;
  path: string;
}

const NavButton = ({ icon, label, path }: NavButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <NavLink to={path}>
            {({ isActive }) => (
              <Button variant='ghost' size='icon' className={clsx("hover:bg-zinc-700", isActive && "bg-zinc-700")}>
                {icon}
              </Button>
            )}
          </NavLink>
        </TooltipTrigger>
        <TooltipContent side='right' className='bg-zinc-800'>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function Navbar() {
  return (
    <div className='flex flex-col size-fit justify-between rounded-md border border-zinc-600 bg-zinc-750 p-3 drop-shadow-md'>
      <div className='flex flex-col items-center gap-3'>
        <NavButton icon={<Home className='size-5 text-zinc-300' />} label='Home' path='/' />
        <NavButton icon={<UserMultiple className='size-5 text-zinc-300' />} label='Profiles' path='profiles' />
        <NavButton icon={<DocumentMultiple_01 className='size-5 text-zinc-300' />} label='Reports' path='reports' />
        <NavButton icon={<ScalesTipped className='size-5 text-zinc-300' />} label='Penal Code' path='penalcode' />
      </div>
    </div>
  );
}