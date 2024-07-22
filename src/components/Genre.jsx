import React,{useRef} from 'react';
import GenreLIST from '../constants/GenresList';
import MovieCard from './MovieCard';

function Genre() {

    return (
        <div className=''>
            {GenreLIST.genreList.map((item,index) => (
                <div  className='p-8 px-8 md:px-16 relative'>
                    <h2 className='text-[20px] text-white font-bold mb-3'>{item.name}</h2>
                    <MovieCard id={item.id} index={index} />
                </div>
            ))}
        </div>
    )
}

export default Genre;