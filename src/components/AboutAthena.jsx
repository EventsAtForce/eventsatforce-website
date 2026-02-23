import React from 'react'
import Folder from './Reactbits/Folder/Folder'

const AboutAthena = () => {
  return (
    <div className="w-full max-w-[1440px] h-full pt-20 pb-[200px]  flex items-center justify-center pb-12 px-4 sm:px-8 lg:px-16">
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-24 lg:gap-36'>
        <div className='w-full xl:min-w-[850px] lg:min-w-[500px] flex flex-col px-6 sm:px-0'>
        <div className="sm:mb-8 w-full">
          <h2 className="text-[#fefff0] text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'Guntech' }}>What is Athenova?</h2>
        </div>
        <div className="w-full">
          
            <p className="text-[#fefff0]  text-lg sm:text-xl lg:text-2xl leading-relaxed font-mono text-justify">
              ATHENOVA is a two day inter-college technical and innovation-focused event at REVA University on 12th and 13th March 2026.<br/><br/>
              A mix of AI-based creative challenges, startup-driven problem solving activities, a hardware-focused competition and nontechnical innovation events to enhance the professional and technical value of the event while maintaining academic integrity and quality.
            </p>
          
          </div>
          </div>
          <div className='w-full flex items-center justify-center pt-8 lg:pt-0 sm:ml-[-80px]' >
            <Folder 
              size={2.5} 
              color="#3c48a1" 
              className="custom-folder"
              items={[
                '/assets/images/Athenova/folder_img_3.jpeg',
                '/assets/images/Athenova/folder_img_2.jpeg',
                '/assets/images/Athenova/folder_img_1.jpeg'
              ]}
            />
          </div>
        
      </div>
    </div>
  )
}

export default AboutAthena
