import { Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Authors from './components/Authors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor'

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/authors" /> }/>
        <Route path="/authors" element={<Authors />}/>
        <Route path="/authors/new" element={<NewAuthor />}/>
        <Route path="/authors/:id/edit" element={<EditAuthor />}/>
      </Routes>
    </div>
  );
}

export default App;
