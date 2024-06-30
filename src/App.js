import Navi from "./Navi";
import Home from './Home'
import Create from "./Create";
import BookDetail from "./BookDetail";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";



function App() {
  
  return (
    <Router>
      <div className="App">
      <Navi />

      
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/bookdetail/:id" element={<BookDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
          
      </div>
        
      </div>
    </Router>
  );
}

export default App;
