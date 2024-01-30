import React, { useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import{ useSnackbar } from 'notistack';

function DeleteBook() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setIsLoading(true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(() => {
      setIsLoading(false)
      enqueueSnackbar('Book deleted succesfully', {variant: 'success'})
      navigate('/')
    })
    .catch((error) => {
      setIsLoading(false);
      alert('An error occurred while deleting the book');
      enqueueSnackbar('Error', {variant: 'error'})
      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl '>Delete Book</h1>
      {isLoading && <Spinner />}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h2 className="text-2x1">Are you sure you want to delete this book?</h2>
        <button className='p-4 bg-red-500 text-white m-8 w-full' onClick={handleDeleteBook}>Yes Delete</button>
      </div>
    </div>
  )
}

export default DeleteBook