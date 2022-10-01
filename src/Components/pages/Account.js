import React from 'react'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
     className=' w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/412c822b-15dd-4f8b-9b0e-32a38b1a1b77/BR-pt-20220919-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='/'
       />
       <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold'>My Configs</h1>
    </div>
    </div>
    </>
  )
}

export default Account
