import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Restart, User, Logout } from '@carbon/icons-react';

const AvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='h-10 w-10 rounded-full'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback className='bg-zinc-700 border border-zinc-600 hover:border-2 hover:border-zinc-500 drop-shadow-md text-zinc-300'>RS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount className='w-48 bg-zinc-750 border border-zinc-650 text-zinc-300'>
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>Richard Sanchez</p>
            <p className='text-xs leading-none text-muted-foreground'>Chief of Police</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className='bg-zinc-650' />
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:bg-zinc-700 data-highlighted:bg-zinc-700 data-highlighted:text-zinc-300'>
            <User className='text-zinc-300' /> My Profile
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:bg-zinc-700 data-highlighted:bg-zinc-700 data-highlighted:text-zinc-300'>
            <Restart className='text-zinc-300' /> Reboot MDT
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className='bg-zinc-650' />
        <DropdownMenuItem className='hover:bg-zinc-700 data-highlighted:bg-zinc-700 data-highlighted:text-zinc-300'>
          <Logout className='text-zinc-300' /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarDropdown;