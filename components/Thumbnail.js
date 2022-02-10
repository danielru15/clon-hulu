import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

const Thumbnail = ({resultado}) => {
  console.log(resultado)
  const base_Url = `https://image.tmdb.org/t/p/original${resultado.poster_path || resultado.backdrop_path}`
  return (
  <div className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
    <Image
      layout='responsive'
      width={1920}
      height={1080}
      src={base_Url}
    />
    <div className='p-2'>
       <p className='truncate max-w-md'>{resultado.overview}</p>
       <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{resultado.title || resultado.original_title}</h2>
       <p className='flex items-center opacity-0 group-hover:opacity-100'>{resultado.release_date} •<ThumbUpIcon className='h-5 mx-2'/>{resultado.vote_count}</p>
    </div>
  </div>)
};

export default Thumbnail;
