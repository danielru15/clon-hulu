import React from 'react';
import Thumbnail from './Thumbnail';

const Results = ({resultado}) => {

  return (
      <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {
          resultado[0].map(result => (
            <Thumbnail
              key={result.id}
              resultado={result}
            />
          ))
        }
      </div>
  )
};

export default Results;
