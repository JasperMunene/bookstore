import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function ShowBook() {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data.book[0]);
        console.log(response.data.book[0].title)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4 '>
      <BackButton />
      <h2 className='my-4 text-3xl'>Show Book</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'>Id</span>
            <span>{book.id}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'>Publish Year</span>
            <span>{book.publishyear}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowBook;
