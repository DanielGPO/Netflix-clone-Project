import React from 'react'
import StoredMovies from './StoredMovies'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import DisplayMovie from './displayMovie'


export default function MoviesList(props) {



    const slideRight =() =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideLeft =() =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
  return (
    <>
    
    <div className='group'>
        <ul  id={'slider'} className='flex-row flex relative w-full overflow-x-scroll scroll-smooth scrollbar-hide 
        whitespace-nowrap'>
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden mt-5 group-hover:block mb-24 bottom-0' size={40}/>
           
            {props.items.map((items) => <StoredMovies key={items.id}
            id={items.id}
            title={items.title}
            path={items.path}
            description={items.description}
              />)}
       <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block mb-24 bottom-0 right-0' size={40}/>
        </ul>
    </div>
    </>

  )
}
