import React from 'react'

const Values = () => {
  return (
    <div className='flex flex-row m-20'>  
      <div className='flex flex-col flex-1 justify-center'>
          <h1 className='primary-heading text-7xl'>Because We Value</h1>

          <p className='capitalize text-2xl mt-10'>
            A better Developer is able to apply th edocumentation taht comes with new software.
            at GDG, we believe in writing down everything we do, using codelabs and google docs. 
            this helps you learnand write code.
          </p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-pink-400 transition duration-300 lg:w-1/4 mt-10">
            Read More
          </button>
      </div>

      <div className='flex flex-1'>
        <img src="/images/placeholders/home-placeholder9.png" alt="values" />
      </div>
    </div>
  )
}

export default Values