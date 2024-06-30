import { Link } from "react-router-dom";

const BlogsBook = ({book , title , }) => {

    return ( 
        <div className="blogs-book">
            
                <h1>{title}</h1>
                {book.map((book)=>(
                <div className="book-blog" key={book.id}>
                <Link to={`/bookdetail/${book.id}`}>
                  <h2>{book.name}</h2>
                  <p>written by {book.writer}</p>
                </Link>
                
                
                
              </div>
            ))}
            
        </div>

     );
}
 
export default BlogsBook;