import { Button } from '../../../components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../components/ui/tooltip';
import { Home, UserMultiple, DocumentSecurity, Report, Car, ScalesTipped } from '@carbon/icons-react';
import { Link, useRoute } from 'wouter';
import clsx from 'clsx';

const items = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: UserMultiple, label: 'Profiles', path: '/profiles' },
  { icon: DocumentSecurity, label: 'Incidents', path: '/incidents' },
  { icon: Report, label: 'Reports', path: '/reports' },
  { icon: Car, label: 'Vehicles', path: '/vehicles' },
  { icon: ScalesTipped, label: 'Charges', path: '/charges' },
] as const;

export default function Navbar() {
  return (
    <nav className='flex flex-col size-fit rounded-md border border-zinc-650 bg-zinc-750 p-3 drop-shadow-md'>
      <div className='flex flex-col items-start gap-3 w-full'>
        {items.map(({ icon: Icon, label, path }) => {
          const [isActive] = useRoute(path);

          return (
            <TooltipProvider key={path}>
              <Tooltip delayDuration={200}>
                <TooltipTrigger asChild>
                  <Link href={path} className='w-full'>
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
                  </Link>
                </TooltipTrigger>
                <TooltipContent side='right' className='bg-zinc-800'>
                  {label}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </nav>
  );
}