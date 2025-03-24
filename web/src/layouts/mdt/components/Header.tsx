import AvatarDropdown from './AvatarDropdown';

export default function Header() {
  return (
    <div className='flex bg-zinc-750 border-b border-zinc-600 justify-end items-center py-4 px-6 drop-shadow'>
      <div className='flex flex-row items-center space-x-6'>
        <AvatarDropdown />
      </div>
    </div>
  );
}