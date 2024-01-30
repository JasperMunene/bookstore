import { Link } from 'react-router-dom'
import { BsArrowLeft} from 'react-icons/bs'

import React from 'react'

function BackButton({destination = '/'}) {
  return (
    <div className='flex'>
        <Link to={destination} className='px-4 bg-sky-800 text-white py-1 rounded-lg w-fit'>
          <BsArrowLeft className='text-2x1' />
        </Link>
    </div>
  )
}

export default BackButton