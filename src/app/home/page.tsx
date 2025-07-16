import Image from "next/image";


export default function Home(){
    return(
        <>
           <nav className="bg-gray-800">
  <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
        <button type="button" className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
        <div className="flex items-center shrink-0">
          <Image
            src="/logo-cosci.png"
            width={150}
            height={150}
            alt="SWULogo"
            />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
           
            <a href="/home" className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Computer Seat Booking System</a>
            <a href="/about" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">About</a>
            <a href="/login" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Logout</a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Profile</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

     
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex text-sm bg-gray-800 rounded-full focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="rounded-full size-8" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>

          
          <div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="sm:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      
      <a href="#" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</a>
      <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
</nav>

        </>
    );
}