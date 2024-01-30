import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear,  setPublishYear] = useState('');
  const [isLoading,  setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSaveBook = () => {
    const data = {
      "title": title,
      "author": author,
      "publishyear": publishYear,
    };
    console.log(data)
    setIsLoading(true);
    axios
    .post('http://localhost:5555/books', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      setIsLoading(false);
      enqueueSnackbar('Book created succesfully', {variant: 'success'});
      navigate('/');
    })
      .catch((error) => {
        setIsLoading(false);
        alert("Error occurred while saving the book. Please try again later.");
        enqueueSnackbar('Error', {variant: 'error'})
        console.error(error);
      })
      
  }
  
  
  return (
    <div className='p-4 '>
      <BackButton />
      <h1 className="text-3xl my-4">Create book</h1>
      {isLoading && <Spinner />}

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title </label>
          <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author </label>
          <input type='text' value={author} onChange={(event) => setAuthor(event.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year </label>
          <input type='text' value={publishYear} onChange={(event) => setPublishYear(event.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>

        <button className='p-2 bg-sky-400 m-8' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook