import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

function BookSingleCard({book}) {
    const [showModal, setShowModal] = useState(false);
  return (
    <div key={book.id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>{book.publishyear}</h2>
    <h4 className='my-2 text-gray-500'>{book.id}</h4>
    <div className='flex justify-start books-center gap-x-2'>
      <PiBookOpenTextLight className='text-red-300 text-2xl' />
      <h2 className='my-1'>{book.title}</h2>
    </div>
    <div className='flex justify-start books-center gap-x-2'>
      <BiUserCircle className='text-red-300 text-xl' />
      <h2 className='my-1'>{book.author}</h2>
    </div>
    <div className='flex justify-start books-center gap-x-2 mt-4 p-4'>
    <BiShow className='text-3x1 text-blue-800 hover:text-black cursor-pointer text-xl' onClick={() => setShowModal(true)} />
      <Link to={`/books/details/${book.id}`}><BsInfoCircle className='text-green-800 text-2xl hover:text-black' /></Link>
      <Link to={`/books/edit/${book.id}`}><AiOutlineEdit className='text-yellow-600 text-2xl hover:text-black' /></Link>
      <Link to={`/books/delete/${book.id}`}><MdOutlineDelete className='text-red-600 text-2xl hover:text-black' /></Link>
    </div>
    {
        showModal && (
            <BookModal book={book} onClose={() => setShowModal(false)}/>
        )
    }
  </div>
  )
}

export default BookSingleCard