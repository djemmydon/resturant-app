import React from 'react'
import { useGetAllMusicQuery } from '../../redux/apiSlice'
function Discover() {
  const  {data, isLoading} = useGetAllMusicQuery()

  const music = data


  console.log(music)
  return (
    <div className='my-10'>
    <div className=' flex justify-between '>
    <h2 className=' text-2xl font-bold'>
    New Realeses
    </h2>

    <p>See All</p>
    </div>

    </div>
  )
}

export default Discover