// import React, {useState} from 'react'

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState('');

//   const handleSetActive = (section) => {
//     setActiveSection(section);
//   };

//   return (
//     <nav>
//       <div className='font-body'>
//         <div className='flex my-4 ml-5'>
//           <div className='flex'>
//             <div className='bg-lightrosetaupe border w-[30px] h-[30px] rounded-full ml-[50px]'></div>
//             <div className='font-bold text-xl ml-3 text-nowrap'>NAA SHIDAA</div>
//           </div>

//           <div className='flex flex-grow justify-end mr-[20px]'>
//             <ul className='flex font-bold text-xl'>
//               <li className='ml-[50px]'>
//                 <a 
//                   href="#home-section" 
//                   className={`${activeSection === 'home' ? 'text-black' : 'text-gray-500'}`}
//                   onClick={() => handleSetActive('home')}
//                 >
//                   Home
//                 </a>
//               </li>

//               <li className='ml-[50px]'>
//               <a
//                 href="#projects-section"
//                 className={`${activeSection === 'projects' ? 'text-black' : 'text-gray-500'}`}
//                 onClick={() => handleSetActive('projects')}
//               >
//                 Projects
//               </a>
//               </li>

//               <li className='ml-[50px]'>
//               <a
//                 href="#contact-section"
//                 className={`${activeSection === 'contact' ? 'text-black' : 'text-gray-500'}`}
//                 onClick={() => handleSetActive('contact')}
//               >
//                 Contact
//               </a>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </div>
//     </nav>

//   )
// }

// export default Navbar

import React, { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="font-body">
      {/* Navbar for medium and larger screens */}
      <div className="hidden sm:flex mt-[14px] ml-5">
        <div className="flex">
          <div className="bg-lightrosetaupe border w-[30px] h-[30px] rounded-full ml-[10px]"></div>
          <div className="font-bold text-xl ml-3 text-nowrap">NAA SHIDAA</div>
        </div>
        <div className="flex flex-grow justify-end mr-[20px]">
          <ul className="flex font-bold text-xl">
            <li className="ml-[50px]">
              <a
                href="#home-section"
                className={`${activeSection === 'home' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => 
                  handleSetActive('home')
                }
              >
                Home
              </a>
            </li>
            <li className="ml-[50px]">
              <a
                href="#projects-section"
                className={`${activeSection === 'projects' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => 
                  handleSetActive('projects')
                }
              >
                Projects
              </a>
            </li>
            <li className="ml-[50px]">
              <a
                href="#contact-section"
                className={`${activeSection === 'contact' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => 
                  handleSetActive('contact')
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div className="sm:hidden flex justify-between items-center pt-4 px-4">
        <div className="flex">
          <div className="bg-lightrosetaupe border w-[30px] h-[30px] rounded-full ml-[10px]"></div>
          <div className="font-bold text-[15px] items-center flex sm:text-xl ml-3 text-nowrap">NAA SHIDAA</div>
        </div>

        {/* Hamburger button */}
        <button onClick={toggleSidebar} className="text-gray-500">
          {sidebarOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transition-all duration-700 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col p-4">
          {/* Close button */}
          <button onClick={toggleSidebar} className="self-end mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="font-bold text-xl">
            <li>
              <a
                href="#home-section"
                className={`${activeSection === 'home' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => {
                  handleSetActive('home');
                  handleLinkClick(); 
                }}
              >
                Home
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#projects-section"
                className={`${activeSection === 'projects' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => {
                  handleSetActive('projects');
                  handleLinkClick(); 
                }}
              >
                Projects
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#contact-section"
                className={`${activeSection === 'contact' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => {
                  handleSetActive('contact');
                  handleLinkClick(); 
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
