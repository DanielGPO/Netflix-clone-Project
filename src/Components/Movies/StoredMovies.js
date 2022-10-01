import React from 'react'
import { UserAuth } from '../../context/AuthContext'

export default function StoredMovies(props) {

  const { PlayShows } = UserAuth()
 
  return (
    <>
    <li >
            <div onClick={() => PlayShows()}
             className= 'text-black hover:bg-black/80 hover:opacity-20 opacity-100 hover:text-white'>
                
            <img className='w-[200px] h-[300px]
             sm:h-[200px] md:w-[140px] lg:w-[280px]
             inline-block cursor-pointer relative p-2 object-cover'
             src={props.path} alt={props.title} />  
                
                <p>{props.title}</p>
            </div>
    </li>
    </>
    
  )
}
