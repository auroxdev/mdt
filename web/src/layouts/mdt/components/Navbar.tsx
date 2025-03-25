import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Home, UserMultiple, Report, ScalesTipped } from '@carbon/icons-react';
import { NavLink } from 'react-router';
import clsx from 'clsx';

const items = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: UserMultiple, label: 'Profiles', path: 'profiles' },
  { icon: Report, label: 'Reports', path: 'reports' },
  { icon: ScalesTipped, label: 'Charges', path: 'charges' },
] as const;

export default function Navbar() {
  return (
    <div className='flex flex-col size-fit rounded-md border border-zinc-600 bg-zinc-750 p-3 drop-shadow-md'>
      <div className='flex flex-col items-start gap-3 w-full'>
        {items.map(({ icon: Icon, label, path }) => (
          <TooltipProvider key={path}>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <NavLink
                  key={path}
                  to={path}
                  className='w-full' // Ensures full-width click area
                >
                  {({ isActive }) => (
                    <Button
                      variant='ghost'
                      size='icon'
                      className={clsx(
                        'hover:bg-zinc-700',
                        isActive && 'bg-zinc-700'
                      )}
                    >
                      <Icon className='size-5 text-zinc-300' />
                    </Button>
                  )}
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side='right' className='bg-zinc-800'>
                {label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}