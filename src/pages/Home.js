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
        <div className='h-[800px] w-90 bg-lavendar rounded-[50px] mx-[13px] sm:mx-6 mt-[14px] mb-[70px] sm:mb-0 flex justify-center items-center flex-col'>
          <div className='flex flex-row sm:hidden space-x-2'>
            <span className='w-20 h-[10px] rounded-xl bg-white'></span>
            <span className='w-14 h-[10px] rounded-xl bg-white'></span>
            <span className='w-8 h-[10px] rounded-xl bg-white'></span>
          </div>
          <div>
            <img className='w-[120px] h-[120px] mt-[90px] sm:mt-[120px] rounded-full object-cover' src={snapme} alt='my face' />
          </div>
          <div className='w-95'>
            <p className='font-bold xl:text-[45px] md:text-[35px] text-[23px] mt-2 sm:mt-0 text-center text-wrap px-[10px] sm:px-0'>Hey, I'm Naa Shidaa,<br></br> an aspiring front-end developer.</p>
          </div>
          <div className='mt-[20px] md:text-[22px] text-[17px] sm:px-0 px-[10px] sm:mb-[100px] text-center'>
            <p>I enjoy bringing unique designs to life, giving them a story and a voice, and creating them as well. </p>
          </div>

          <div className='flex sm:w-[420px] w-60 h-50 sm:h-full flex-col sm:flex-row static pt-[40px] sm:pt-[0px] pb-[20px] sm:pb-[0px] sm:justify-evenly'>

            <a href={`mailto:${emailAddress}`} className='sm:mt-[7px] mb-[10px] sm:mb-0 sm:mx-0 mx-auto'>
              <button className='px-[20px] py-[13px] h-[62px] text-[17px] sm:text-[20px] rounded-[38px] bg-rosequartz text-white'>Talk with me</button>
            </a>
            <div className='border-white border-[17px] mx-auto sm:mx-0 rounded-[200px] '>
              <a href="https://www.linkedin.com/in/naa-shidaa-addo" target="_blank" rel="noopener noreferrer">
                <img className='w-8 h-8 sm:w-10 sm:h-10' src={linkedin} alt='Linkedin' />
              </a>
            </div>
            <div className="flex flex-row justify-evenly">
              <div className='border-white border-[17px] rounded-[200px] '>
                <a href="https://github.com/RainaaNs" target="_blank" rel="noopener noreferrer">
                  <img className='w-8 h-8 sm:w-10 sm:h-10' src={github} alt='Github' />
                </a>
              </div>
              <div className='border-white border-[17px] rounded-[200px] sm:hidden flex'>
                <a href="https://github.com/RainaaNs" target="_blank" rel="noopener noreferrer">
                  <img className='w-8 h-8 sm:w-10 sm:h-10' src={github} alt='Github' />
                </a>
              </div>
            </div>

          </div>
        </div>

        <section id="projects-section" className="mt-[10px] mb-[10px] md:mb-[70px] sm:mb-[40px] h-[90%] w-[100%]">
          <div className=''>
            <p className='font-bold text-[24px] sm:text-[32px] md:text-[40px] ml-[20px] sm:ml-[50px] my-[25px] leading-8 sm:leading-none '>Some Projects...</p>
          </div>
          <div className="border-2 md:mt-[10px] rounded-[50px] w-[100%] sm:w-[500px] md:w-[75%] lg:w-[70%] h-[72vh] sm:h-[75vh] mx-auto">
            <Carousel transitionTime={1000} showStatus={false} showIndicators={true} showArrows={false} infiniteLoop swipeable={false} className='w-full h-[550px] sm:h-[600px] items-center mx-auto'>
              <div className='flex w-full h-[550px] sm:h-[600px] mx-auto'>
                <img className='object-contain w-auto h-auto max-w-full max-h-full md:pt-[40px]' src={iPhone15Pro} alt="Fashion e-commerce platform" />
                <div className='absolute inset-0'>
                  <p className='text-[23px] sm:text-[30px] font-semibold pt-10 sm:pt-4'>OpenFashion 2.0</p>
                  <p className='text-[18px] sm:text-[23px]'>Fashion e-commerce platform</p>
                  <div className='absolute right-4 sm:right-12 top-[12%] sm:top-[15%] transform -translate-y-[100%]'>
                    <a href="https://github.com/RainaaNs/rn-assignment7-11307343" target="_blank" rel="noopener noreferrer">
                      <div className='bg-white w-[50px] shadow shadow-slate-500 h-[50px] rounded-full'>
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex w-full h-[600px] mx-auto'>
                <img className='object-contain w-auto h-auto max-w-full max-h-full md:pt-[40px]' src={iPhone15} alt="Transaction management app" />
                <div className='absolute inset-0'>
                  <p className='text-[23px] sm:text-[30px] font-semibold pt-10 sm:pt-4'>Transactedd</p>
                  <p className='text-[18px] sm:text-[23px] text-nowrap'>Transaction management app</p>
                  <div className='absolute right-4 sm:right-12 top-[12%] sm:top-[15%] transform -translate-y-[100%]'>
                    <a href="https://github.com/RainaaNs/rn-assignment5-11307343" target="_blank" rel="noopener noreferrer">
                      <div className='bg-white shadow shadow-slate-500 w-[50px] h-[50px] rounded-full'>
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex w-full h-[550px] mx-auto'>
                <img className='object-contain w-auto h-auto max-w-full max-h-full md:pt-[0px]' src={iPhone13} alt="Job Search app" />
                <div className='absolute inset-0'>
                  <div className='absolute left-16 top-8'>
                    <p className='text-[23px] sm:text-[30px] font-semibold pt-2 sm:pt-[2px]'>Jobizz</p>
                    <p className='text-[18px] sm:text-[23px]'>Job search app</p>
                  </div>
                  <div className='absolute right-12 sm:right-12 top-[15%] transform -translate-y-[100%]'>
                    <a href="https://github.com/RainaaNs/rn-assignment4-11307343" target="_blank" rel="noopener noreferrer">
                      <div className='bg-white shadow shadow-slate-500 w-[50px] h-[50px] rounded-full'>
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex w-full h-[600px] mx-auto'>
                <img className='object-contain w-auto h-auto max-w-full max-h-full md:pt-[40px]' src={S8Ultra} alt="AquaNet" />
                <div className='absolute inset-0'>
                  <p className='text-[23px] sm:text-[30px] font-semibold pt-10 sm:pt-4'>AquaNet</p>
                  <p className='text-[18px] sm:text-[23px]'>Fish e-commerce platform</p>
                  <div className='absolute right-4 sm:right-12 top-[12%] sm:top-[15%] transform -translate-y-[100%]'>
                    <a href="https://aquanet-frontend.onrender.com/#home" target="_blank" rel="noopener noreferrer">
                      <div className='bg-white shadow shadow-slate-500 w-[50px] h-[50px] rounded-full'>
                        <img className='w-[35px] h-[50px] p-2' src={upperrightarrow} alt='Link to project' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </Carousel>
          </div>
        </section>

        <section id="contact-section" >
          <div className='h-[480px] sm:h-[500px] md:h-[550px] bg-mintcream rounded-[50px] mx-[13px] sm:mx-6 mt-5 mb-[40px] flex flex-col'>
            <div className='mt-[50px] mx-[18px] sm:mx-[30px] md:mx-[50px]'>
              <p className='font-bold font-lato text-[30px] sm:text-[43px] md:text-[50px]'>Let's chat<span className='text-red-700'>.</span></p>
              <p className='text-[17px] sm:text-[24px] md:text-[25px] text-wrap leading-7 sm:leading-normal'>Reach out through email or connect with me on social media - I'm just a message away.</p>

              <div className='flex flex-col sm:flex-row gap-4 w-[190px] sm:w-[470px] mt-[80px] sm:mt-[100px] md:mt-[192px]'>
                <div>
                  <EmailCopyButton />
                </div>
                <div className="flex flex-row gap-x-4">
                  <div className='border-white border-[17px] rounded-[200px] sm:mt-[23px] '>
                    <a href="https://www.linkedin.com/in/naa-shidaa-addo" target="_blank" rel="noopener noreferrer">
                      <img className='w-8 h-8 sm:w-10 sm:h-10' src={linkedin} alt='Linkedin' />
                    </a>
                  </div>

                  <div className='border-white border-[17px] rounded-[200px] sm:mt-[23px]'>
                    <a href="https://github.com/RainaaNs" target="_blank" rel="noopener noreferrer">
                      <img className='w-8 h-8 sm:w-10 sm:h-10' src={github} alt='Github' />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <p className='ml-[25px] sm:ml-[40px] md:ml-[50px] text-[15px] sm:text-[20px] mb-[10px]'>© 2024 All rights reserved.</p>
        </section>
      </section>
    </div>

  )
}

export default Home; 