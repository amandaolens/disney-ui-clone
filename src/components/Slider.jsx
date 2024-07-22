import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

function Slider() {
    const [movieLists,setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        GetTrendingVidoes();
    }, []);

    const GetTrendingVidoes = () => {
        GlobalApi.getTrendingVidoes.then((result) => setMovieList(result.data.results));
    }

    const sliderRight = (element) => {
        element.scrollLeft += window.innerWidth - 110;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= window.innerWidth - 110;
    };

    return (
        <div>
            <HiChevronLeft className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[230px] cursor-pointer' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[230px] cursor-pointer right-0' onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieLists.map((item,index) => (
                    <img src = { 'https://image.tmdb.org/t/p/original' + item.backdrop_path } className='min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all ease-in-out duration-100' />
                ))}
            </div>
        </div>
        
    )
}

export default Slider;