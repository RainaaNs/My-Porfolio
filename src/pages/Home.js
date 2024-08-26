import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../carousel.css';
import EmailCopyButton from '../components/EmailCopyButton';

import snapme from '../assets/snapme.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import upperrightarrow from '../assets/upperrightarrow.png'
import iPhone15 from '../assets/iPhone15.png'
import iPhone13 from '../assets/iPhone13.png'
import iPhone15Pro from '../assets/iPhone15Pro.png'
import S8Ultra from '../assets/S8Ultra.png'

const Home = () => {

const emailAddress = "rainaaaddo@gmail.com";
  return (
    <div className='font-body'>
      <section id="home-section" className="h-screen">
        <div className='h-[800px] bg-lavendar rounded-[50px] mx-6 mt-5 flex justify-center items-center flex-col'>
          <div>
            <img className='w-[120px] h-[120px] mt-[120px] rounded-full object-cover' src={snapme} alt='my face' />
          </div>
          <div className='w-[600px]'>
            <p className='font-bold font-lato text-[45px] text-center text-wrap'>Hey, I'm Naa Shidaa, an aspiring front-end developer.</p>
          </div>
          <div className='mt-[20px] text-[22px] mb-[100px] '>
            <p>I enjoy bringing unique designs to life, giving them a story and a voice, and creating them as well. </p>
          </div>

          <div className='flex flex-row static pt-[50px] mr-[1400px] w-[370px] justify-evenly'>
            <a href={`mailto:${emailAddress}`} className='mt-[7px]'>
              <button className='px-[20px] py-[13px] h-[55px] text-[20px] rounded-[38px] bg-rosequartz text-white'>Talk with me</button>
            </a>
            
            <div className='border-white border-[17px] rounded-[200px] '>
            <a href="https://www.linkedin.com/in/naa-shidaa-addo" target="_blank" rel="noopener noreferrer">
              <img className='w-10 h-10' src={linkedin} alt='Linkedin'/>
            </a>
            </div>
            <div className='border-white border-[17px] rounded-[200px] '>
            <a href="https://github.com/RainaaNs" target="_blank" rel="noopener noreferrer">
              <img className='w-10 h-10' src={github} alt='Github' />
            </a>
            </div>
          </div>
        </div>
        
        <section id="projects-section" className="h-screen">
          <div className="w-[1000px] h-[700px] mx-auto border-2 mt-[120px] rounded-[50px]">
            <Carousel transitionTime={1000} showStatus={false} showIndicators={true} showArrows={true} infiniteLoop className='w-full h-full '>
              <div className='flex justify-center'>
                <img className='object-cover border-2 w-full h-auto' src={iPhone15Pro} alt="Fashion e-commerce platform" />
                <div className='absolute inset-0'>
                  <p className='text-[30px] font-semibold pt-4'>OpenFashion 2.0</p>
                  <p className='text-[23px]'>Fashion e-commerce platform</p>
                  <a href="https://github.com/RainaaNs/rn-assignment7-11307343" target="_blank" rel="noopener noreferrer">
                    <div className='bg-white shadow w-[50px] h-[50px] rounded-full absolute ml-[856px] mt-[-50px]'> 
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project'/>
                    </div>
                  </a>
                </div>
              </div>

              <div className='flex justify-center'>
                <img className='object-cover border-2 w-full h-auto' src={iPhone15} alt="Transaction management app" />
                <div className='absolute inset-0'>
                  <p className='text-[30px] font-semibold pt-[2px]'>Transactedd</p>
                  <p className='text-[23px] text-nowrap'>Transaction management app</p>
                  <a href="https://github.com/RainaaNs/rn-assignment5-11307343" target="_blank" rel="noopener noreferrer">
                    <div className='bg-white shadow w-[50px] h-[50px] rounded-full absolute ml-[856px] mt-[-50px]'> 
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project'/>
                    </div>
                  </a>
                </div>
              </div>

              <div className='flex'>
                <img className='object-cover border-2 w-full h-auto' src={iPhone13} alt="Job Search app" />
                <div className='absolute inset-0 mr-[700px]'>
                  <p className='text-[30px] font-semibold pt-[50px]'>Jobizz</p>
                  <p className='text-[23px]'>Job search app</p>
                  <a href="https://github.com/RainaaNs/rn-assignment4-11307343" target="_blank" rel="noopener noreferrer">
                    <div className='bg-white shadow w-[50px] h-[50px] rounded-full absolute ml-[856px] mt-[-50px]'> 
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project'/>
                    </div>
                  </a>
                </div>
              </div>

              <div className='flex'>
                <img className='object-cover border-2 w-full h-auto' src={S8Ultra} alt="AquaNet" />
                <div className='absolute inset-0'>
                  <p className='text-[30px] font-semibold pt-[10px]'>AquaNet</p>
                  <p className='text-[23px]'>Fish e-commerce platform</p>
                  <a href="https://aquanet-frontend.onrender.com/#home" target="_blank" rel="noopener noreferrer">
                    <div className='bg-white shadow w-[50px] h-[50px] rounded-full absolute ml-[856px] mt-[-50px]'> 
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project'/>
                    </div>
                  </a>
                </div>
              </div>

            </Carousel>
          </div>
        </section>

        <section id="contact-section" >
          <div className='h-[600px] bg-mintcream rounded-[50px] mx-6 mt-5 mb-[40px] flex flex-col'>
            <div className='mt-[50px] ml-[50px]'>
              <p className='font-bold font-lato text-[50px]'>Let's chat<span className='text-red-700'>.</span></p>
              <p className='text-[25px] text-wrap'>Reach out through email or connect with me on social media - I'm just a message away.</p>

              <div className='flex flex-row justify-evenly w-[570px] mt-[252px]'>
                <div>
                  <EmailCopyButton/>
                </div>
                <div className='border-white border-[17px] rounded-[200px] mt-[23px] '>
                <a href="https://www.linkedin.com/in/naa-shidaa-addo" target="_blank" rel="noopener noreferrer">
                  <img className='w-10 h-10' src={linkedin} alt='Linkedin'/>
                </a>
                </div>
                
                <div className='border-white border-[17px] rounded-[200px] mt-[23px]'>
                <a href="https://github.com/RainaaNs" target="_blank" rel="noopener noreferrer">
                  <img className='w-10 h-10' src={github} alt='Github' />
                </a>
                </div>
              </div>

            </div>
          </div>
      
        <p className='ml-[50px] text-[20px] mb-[10px]'>© 2024 All rights reserved.</p>
        </section>
       </section>
    </div>
  
  )
}

export default Home; 