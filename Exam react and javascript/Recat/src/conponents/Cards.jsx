import React from 'react'

function Cards(props) {
  return (

        <div className='w-[300px] border border-black flex-wrap text-center'>
            <img className='w-full' src={props.img} alt="" />
            <h1 className='text-2xl'>{props.titile}</h1>
            <p>{props.body}</p>
       
         </div>
  )
}

export default Cards