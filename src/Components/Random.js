
import React from 'react'
import Spinner from './Spinner';
import UseGif from '../Hooks/UseGif';



function Random() {
  

    const {gif,loading, fetchData} = UseGif()

    
  return (
    <div className='w-1/2   bg-green-500 rounded-lg border border-black flex flex-col items-center  gap-y-5 mt-[15px] '>
        <h1 className='text-2xl mt-10 underline uppercase font-bold'>A Random Gif</h1>

{
  loading ? (<Spinner/>):( <img src={gif} alt="gif" width={450} />)
}

       


        <button onClick={()=>fetchData()} className='w-10/12 mb-16 bg-yellow-500 text-lg py-2  rounded-lg  ' >Generate</button>

        
    </div>
  )
}

export default Random