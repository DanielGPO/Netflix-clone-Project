import React from 'react'
import VideoPlayer from 'react-video-js-player'
import { UserAuth } from '../../context/AuthContext'
import Tudum from './RealMovies/Tudum.mp4'
import {AiOutlineClose } from 'react-icons/ai'

const Tudumm = Tudum;


export default function  DisplayMovie () {
    const { play, PlayShows } = UserAuth()

    const thumb = 
    'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/homem-aranha-sem-volta-para-casa-lancamento-plataformas-digitais.jpg'
    if(play){
        return (
            <div className='pt-[60px] top-0 left-0 right-0  h-[1100px] bg-black/60 absolute z-[110]'>
            <AiOutlineClose onClick={() => PlayShows()} className='text-white cursor-pointer text-5xl right-0 absolute z-[112] top-0 mr-9 mt-2'/>

              <VideoPlayer
              src={Tudumm}
              poster={thumb}
              width="1350"
              height="600"
              />
            </div>
        )
    }
    else{
        return null
    }
}


