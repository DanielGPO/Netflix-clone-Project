import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ error, setError ]= useState('')
    const { logIn } = UserAuth()

    const navigate = useNavigate()

    const handleSubmit =  async (e) =>{

        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
           navigate('/')
        } catch (error) {
            console.log(error)
            setError(error)
        }
        
    }

  return (
    <div className='w-full h-screen'>
    <img
     className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/412c822b-15dd-4f8b-9b0e-32a38b1a1b77/BR-pt-20220919-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='/'
       />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
      <div className='max-w-[460px] h-[540px] mx-auto bg-black/75 text-white'>
  <div className='max-w-[320px] mx=auto py-16'>
      <h1 className=' ml-16 text-3xl font-bold'>Entre com sua conta</h1>
      
     <p>

       {error ? <p className='p-3 bg-red-400 my-2'> {error} </p> : null}
      </p>
      
      <form onSubmit={handleSubmit} className='ml-16 w-full flex flex-col py-4'>
          <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 
          rounded'
           type="email"
            placeholder='Email'
            autoComplete='email'
             />
          <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 
          rounded'
           type="password"
           placeholder='Password'
           autoComplete='current-password'
            />
            <button onClick={handleSubmit} className='bg-red-600 py-3 my-6 rounded font-bold'
            >Entrar</button>
          <div className='flex justify-between items-center'>
              <p> <input className='mr-2' type="checkbox" />Remember me  </p>
              <p>Need Help?</p>
          </div>
          <p className='py-8'><span className='text-gray-600'>Não tem uma conta ainda? </span>
            <Link to='/SignUp'>
            Sign Up
            </Link>
            
            </p>
      </form>
  </div>

      </div>
      </div>
  </div>
  )
}

export default Login
