import React from 'react';
import useFetch from './usefetch'
import BlogsBook from './BlogsBook';


export default function Home() {
  const {book, loading , error } = useFetch('http://localhost:8000/blog');

  return (
    <div className="homeclass">
    { error && <div>{error}</div> }
      {loading && <div>Loading...</div>}
      
      {book && <BlogsBook book={book} title="All Books" />}
      {/* <BlogsBook book={book.filter((blog) => blog.writer === 'Chit Oo Nyo')} title="Chit Oo Nyo's Collection" handleDelete={handleDelete}/> */}
      
    </div>
  )
}
