import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {

    const [name , setName] = useState('');
    const [content , setContent] = useState('');
    const [writer , setWriter] = useState('Ju');
    const [loading , setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const bookdata = {name , content, writer}
        setLoading(true);
        
        fetch('http://localhost:8000/blog' , {
            method : 'POST',
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(bookdata)

        })
        .then(()=>{
            console.log("new blog added");
            setLoading(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">

            <h1>Create your Book</h1>
            <form  onSubmit={handleSubmit}>
            <label>Enter your title</label>
            <input type="text"
                required
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />

            <label>Enter author name</label>
            <select
            value={writer}
            onChange={e => setWriter(e.target.value)}
            >
                <option value="Chit Oo Nyo">Chit Oo Nyo</option>
                <option value="Ju">Ju</option>
                <option value="Toe Saung">Toe Saung</option>
            </select>

            <label>Enter your content</label>
            <textarea required 
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            >
            </textarea>
            { !loading && <button>Submit</button>}
            { loading && <button disabled>Adding ....</button>}
            </form>
            
            

        </div>
     );
}
 
export default Create;