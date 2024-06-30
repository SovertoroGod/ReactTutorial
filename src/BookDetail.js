import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useNavigate } from "react-router-dom";

const BookDetail = () => {
    const { id } = useParams();
    const { book, loading, error} = useFetch('http://localhost:8000/blog/' + id);
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blog/' + book.id, {
            method : "DELETE",
        
        })
        .then(()=>{
            navigate('/');
        })

    }

    return (
        <div className="book-detail">
            {loading && <p>Loading ...</p>}
            {error && <div>{error}</div>}
            {book && <article>
                    <h1>{book.name}</h1>
                    <h3>Written by {book.writer}</h3>
                    <div>{book.content}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>}
            
        </div>
     );
}
 
export default BookDetail;