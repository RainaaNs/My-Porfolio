import React, {useState} from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <nav>
      <div className='font-body'>
        <div className='flex flex-row my-4 ml-5'>
          <div className='bg-lightrosetaupe border w-[30px] h-[30px] rounded-full ml-[50px]'></div>
          <div className='font-bold text-xl ml-3 text-nowrap'>NAA SHIDAA</div>

          <ul className='flex flex-row ml-[1200px] font-bold text-xl'>
            <li className='ml-[50px]'>
              <a 
                href="#home-section" 
                className={`${activeSection === 'home' ? 'text-black' : 'text-gray-500'}`}
                onClick={() => handleSetActive('home')}
              >
                Home
              </a>
            </li>

            <li className='ml-[50px]'>
            <a
              href="#projects-section"
              className={`${activeSection === 'projects' ? 'text-black' : 'text-gray-500'}`}
              onClick={() => handleSetActive('projects')}
            >
              Projects
            </a>
            </li>
            
            <li className='ml-[50px]'>
            <a
              href="#contact-section"
              className={`${activeSection === 'contact' ? 'text-black' : 'text-gray-500'}`}
              onClick={() => handleSetActive('contact')}
            >
              Contact
            </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
   
  )
}

export default Navbar