import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import EmptyHome from './components/EmptyHome';
import NotesApp from './components/Plus';


const App = () => {
  return(
    <Router>
      <Routes>
      <Navbar/>
      <Route path='/' element={<NotesApp/>}/>
      <Route path='/note/:id' element={<NoteDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App;