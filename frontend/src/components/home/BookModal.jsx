import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"

function BookModal({ book, onClose}) {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
    <div onClick={(event) => event.stopPropagation} className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex-col relative'>
        <AiOutlineClose className='w-fit right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />
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
    <p className='mt-4'>Anything You want to show</p>
    <p className='my-2'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla sem, blandit ut sollicitudin eu, luctus vel neque. Vestibulum malesuada urna eget placerat pellentesque. Cras vehicula vitae dui in suscipit. Duis laoreet odio justo. Morbi blandit rhoncus justo, sit amet suscipit risus accumsan sit amet. Sed ac libero quis urna scelerisque varius sit amet ac justo. Cras massa odio, vehicula non ipsum eget, tempus bibendum augue. Nulla iaculis viverra velit at pretium. Fusce tincidunt neque ante, ac fringilla est mollis a. Maecenas porta, nulla at ultricies commodo, metus diam condimentum libero, sit amet mattis sapien tortor quis enim. Pellentesque vitae magna a augue feugiat ultricies. Sed iaculis, enim tempus lobortis porttitor, urna nulla molestie velit, at sodales purus massa non nisi. Phasellus nec ultricies turpis.</p>
    </div>
    </div>
  )
}

export default BookModal