import React from 'react'

const ResumePage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <iframe
        className="w-screen h-screen"
        src="resume.pdf"
      />
    </div>
  )
}

export default ResumePage