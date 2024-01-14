
import React, {  useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../Hooks/UseGif';


function Tag() {

  const [tag, setTag] = useState('car')
  

    const {gif,loading,fetchData} = UseGif(tag)

   


   
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center  gap-y-5 mt-[15px] '>
        <h1 className='text-2xl mt-10 underline uppercase font-bold'>Random {tag} Gif</h1>

{
  loading ? (<Spinner/>):( <img src={gif} alt="gif" width={450} />)
}

       <input
        type="text"
        className='w-10/12  text-lg py-2  rounded-lg mb-2 text-center '
        onChange={(event)=> setTag(event.target.value)  }
        value={tag}
        />


        <button onClick={()=>fetchData(tag)} className='w-10/12 mb-16 bg-yellow-500 text-lg py-2  rounded-lg  ' >Generate</button>

        
    </div>
  )
}

export default Tag