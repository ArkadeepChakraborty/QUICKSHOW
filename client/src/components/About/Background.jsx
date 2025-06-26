import React from 'react'

function Background({heroCount}) {
  
    if (heroCount === 0) {
    return <img src="/Mo1.webp" alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover' />
    } else if (heroCount === 1) {
    return <img src="/Mo2.jpg" alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover' />
    } else if (heroCount === 2) {
    return <img src="/Mo3.jpg" alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover' />
    } else if (heroCount === 3) {
    return <img src="/Mo4.avif" alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover' />
    }

}

export default Background