import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Icon } from '@iconify/react';

const AvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-10 w-10 rounded-full'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback className='bg-zinc-700 border border-zinc-600 drop-shadow-md text-zinc-300'>RS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount className="w-48 bg-zinc-750 border border-zinc-600 text-zinc-300">
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>Richard Sanches</p>
            <p className='text-xs leading-none text-muted-foreground'>Chief of Police</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='bg-zinc-600' />
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:bg-zinc-700'>
          <Icon icon='carbon:user' /> My Profile
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-zinc-700'>
            <Icon icon='carbon:restart' /> Reboot MDT
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className='bg-zinc-600' />
        <DropdownMenuItem className='hover:bg-zinc-700'>
          <Icon icon='carbon:logout' /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarDropdown;