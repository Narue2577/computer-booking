import Image from "next/image";


export default function Home(){
    return(
        <>

<div className="w-full min-h-screen m-0 font-sans bg-gray-100">
	<div className="bg-white shadow">
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between py-4">
          <div>
            <Image
              src="/logo-cosci.png"
               width={100}
               height={100}
               alt="SWU Logo"
            />
          </div>
        <div className="hidden sm:flex sm:items-center">
          <a href="#" className="mr-4 text-sm font-semibold text-gray-800 hover:text-purple-600">Computer Seat Booking System</a>
          <a href="#" className="mr-4 text-sm font-semibold text-gray-800 hover:text-purple-600">About</a>
          <a href="#" className="mr-4 text-sm font-semibold text-gray-800 hover:text-purple-600">Logout</a>
          {/*<a href="#" className="text-sm font-semibold text-gray-800 hover:text-purple-600">Pricing</a> */}
        </div>

        {/*<div className="hidden sm:flex sm:items-center">
          <a href="#" className="mr-4 text-sm font-semibold text-gray-800 hover:text-purple-600">Sign in</a>
          <a href="#" className="px-4 py-2 text-sm font-semibold text-gray-800 border rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
        </div> */}

        <div className="cursor-pointer sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-600" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"/>
          </svg>
        </div>
      </div>
      
      <div className="block py-2 bg-white border-t-2 sm:hidden">
        <div className="flex flex-col">
          <a href="#" className="mb-1 text-sm font-semibold text-gray-800 hover:text-purple-600">Products</a>
          <a href="#" className="mb-1 text-sm font-semibold text-gray-800 hover:text-purple-600">Marketplace</a>
          <a href="#" className="mb-1 text-sm font-semibold text-gray-800 hover:text-purple-600">Partners</a>
          <a href="#" className="mb-1 text-sm font-semibold text-gray-800 hover:text-purple-600">Pricing</a>
          <div className="flex items-center justify-between pt-2 border-t-2">
            <a href="#" className="mr-4 text-sm font-semibold text-gray-800 hover:text-purple-600">Sign in</a>
            <a href="#" className="px-4 py-1 text-sm font-semibold text-gray-800 border rounded-lg hover:text-purple-600 hover:border-purple-600">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>


<div id="default-carousel" className="relative w-full" data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <Image
                                      src="/swuEng.png"
                                      width={150}
                                      height={150}
                                      alt="SWU Logo"
                                  />
      </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
 <Image
                                       src="/swuEng.png"
                                       width={150}
                                       height={150}
                                       alt="SWU Logo"
                                   />       
                                   </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
                                                src="/swuEng.png"
                                                width={150}
                                                height={150}
                                                alt="SWU Logo"
                                            />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
                                                src="/swuEng.png"
                                                width={150}
                                                height={150}
                                                alt="SWU Logo"
                                            />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image
                                                src="/swuEng.png"
                                                width={150}
                                                height={150}
                                                alt="SWU Logo"
                                            />
        </div>
    </div>
    
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>




<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                {/*<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
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
                </th>*/}
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800" >#</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Student ID</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">First</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Last</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Room</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Seat</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Start Date</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Expired Date</th>
                <th scope="col" className="px-6 py-3 text-center bg-gray-50 dark:bg-gray-800">Submit</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                {/*<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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
                </td> */}
                 <th scope="col" className="px-6 py-3 bg-red-100 dark:bg-gray-800" >1</th>
                <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800"><input className="border-style: solid" type="text" name="studID" /></th>
                <th scope="col" className="px-6 py-3 bg-red-100 dark:bg-gray-800"><input className="border-style: solid" type="text" name="firstname" /></th>
                <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800"><input className="border-style: solid" type="text" name="lastname" /></th>
                <th scope="col" className="px-6 py-3 bg-red-100 dark:bg-gray-800">601</th>
                <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800">01</th>
                <th scope="col" className="px-6 py-3 bg-red-100 dark:bg-gray-800"><input className="border-style: solid" type="datetime-local" name="startTime" /></th>
                <th scope="col" className="px-6 py-3 bg-gray-100 dark:bg-gray-800"><input className="border-style: solid" type="datetime-local" name="endTime" /></th>
                <th scope="col" className="px-6 py-3 bg-red-100 dark:bg-gray-800 hover:bg-green-500"><button>Submit</button></th>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                {/*<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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
                </td> */}
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                {/*<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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
                </td>*/}
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                {/*<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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
                </td>*/}
            </tr>
            <tr>
                {/*<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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
                </td>*/}
            </tr>
        </tbody>
    </table>
</div>

<footer className="w-full shadow-sm bg-neutral-400 dark:bg-gray-900">
    <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        {/*<div className="sm:flex sm:items-center sm:justify-between">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <span className="block text-sm text-black-500 sm:text-center dark:text-black-400">© 2025 <a href="http://cosci.swu.ac.th/" className="hover:underline">College Of Social Communication Innovation</a>. All Rights Reserved.</span>
    </div>
</footer>
</div>







        </>
    );
}