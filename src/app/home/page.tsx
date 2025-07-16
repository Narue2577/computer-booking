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

<div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"
  }' className="relative">
  <div className="relative w-full overflow-hidden bg-white rounded-lg hs-carousel min-h-96">
    <div className="absolute top-0 bottom-0 flex transition-transform duration-700 opacity-0 hs-carousel-body start-0 flex-nowrap">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full p-6 bg-gray-100">
          <span className="self-center text-4xl text-gray-800 transition duration-700">First slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full p-6 bg-gray-200">
          <span className="self-center text-4xl text-gray-800 transition duration-700">Second slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full p-6 bg-gray-300">
          <span className="self-center text-4xl text-gray-800 transition duration-700">Third slide</span>
        </div>
      </div>
    </div>
  </div>

  <button type="button" className="absolute inline-flex items-center justify-center text-gray-800 -translate-y-1/2 bg-white border border-gray-100 rounded-full hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default top-1/2 start-2 size-10 shadow-2xs hover:bg-gray-100 focus:outline-hidden">
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="absolute inline-flex items-center justify-center text-gray-800 -translate-y-1/2 bg-white border border-gray-100 rounded-full hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default top-1/2 end-2 size-10 shadow-2xs hover:bg-gray-100 focus:outline-hidden">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>

  <div className="absolute flex justify-center hs-carousel-pagination bottom-3 start-0 end-0 gap-x-2"></div>
</div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple MacBook Pro
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    Wearables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
            </tr>
        </tbody>
    </table>
</div>



<footer className="m-4 bg-white rounded-lg shadow-sm dark:bg-gray-900">
    <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
    </div>
</footer>


        </>
    );
}