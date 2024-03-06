import React, { useState } from 'react'

function Nav() {
    const [isTr , setIst] = useState(true)
    const  [icon ,setIcon] = useState(true)
  return (
    <div className='flex justify-between '>
    <div className='flex w-full flex-col px-16 justify-between sm:flex-row  py-4'>
        <h1 className='text-3xl font-semibold'>Xalka</h1>
        {
            isTr?  <ul className='flex gap-7 bg-white text-3xl font-semibold flex-col  sm:flex-row sm:bg-transparent '>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>:""
        }
      

    
        
       

    </div>
    {
            isTr?<i class="text-3xl mt-4 mr-4 fa fa-times sm:hidden" aria-hidden="true  "  onClick={()=>setIst(!isTr)}></i>
            :<i class="text-3xl mt-4 mr-4 fa fa-bars sm:hidden" aria-hidden="true  "  onClick={()=>setIst(!isTr)}></i>
        }   
    </div>
  )
}

export default Nav