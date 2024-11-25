import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Icon } from '@iconify/react';

interface NavButtonProps {
  icon: string; // Iconify (see https://icon-sets.iconify.design/)
  label: string;
}

const NavButton = ({ icon, label }: NavButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button variant='ghost' size='icon' className='hover:bg-zinc-700'>
            <Icon icon={icon} className='h-5 w-5 text-zinc-300' />
          </Button>
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
    <div className='flex flex-col h-fit w-fit justify-between rounded-md border border-zinc-600 bg-zinc-750 p-3 drop-shadow-md'>
      <div className='flex flex-col items-center gap-3'>
        <NavButton icon='carbon:home' label='Home' />
        <NavButton icon='carbon:user-multiple' label='Profiles' />
        <NavButton icon='carbon:document-multiple-01' label='Reports' />
        <NavButton icon='carbon:scales-tipped' label='Penal Code' />
      </div>
    </div>
  );
}