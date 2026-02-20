import React from 'react'
import Folder from './Reactbits/Folder/Folder'

const AboutAthena = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-screen  flex items-center justify-center pb-12 px-16">
      <div className='w-full flex lg:flex-row flex-col gap-16 items-center'>
        <div className='flex flex-col flex-2'>
        <div className="mb-8">
          <h2 className="text-[#fefff0] text-5xl font-bold mb-6" style={{ fontFamily: 'Guntech' }}>What is Athenova?</h2>
        </div>
        <div className="">
          
            <p className="text-[#fefff0] max-w-[800px] text-2xl leading-relaxed font-mono text-justify">
              ATHENOVA is a two day inter-college technical and innovation-focused event at REVA University on 12th and 13th March 2026.<br/><br/>
              A mix of AI-based creative challenges, startup-driven problem solving activities, a hardware-focused competition and nontechnical innovation events to enhance the professional and technical value of the event while maintaining academic integrity and quality.
            </p>
          
          </div>
          </div>
          <div className='flex-1 flex items-center justify-center pt-16 md:pl-20' >
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
