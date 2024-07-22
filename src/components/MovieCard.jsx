import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../services/GlobalApi';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';


function MovieCard({ id,index }) {
    const [movieList,setMovieList] = useState([]);

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    const elementRef=useRef(null);

    useEffect(( ) => {
        GlobalApi.getMovieByGenreId(id).then((res) => setMovieList(res.data.results));
    },[]);

    return (
        <div className='relative'>
            <IoChevronBackOutline className='absolute text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block mt-[70px]' onClick={()=>slideLeft(elementRef.current)} />
            <IoChevronForwardOutline className='absolute text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block right-0 mt-[70px]' onClick={()=>slideRight(elementRef.current)} />

            <div ref={elementRef} className='flex gap-6 scrollbar-none scroll-smooth overflow-x-auto pt-4 px-3 pb-4'>
                {movieList.map((item) => (
                    // console.log(item)
                    <img src={ 'https://image.tmdb.org/t/p/original'  + item.backdrop_path } className='-[110px] md:w-[300px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in' />
                ))}
            </div>
        </div>
    )
}

export default MovieCard;