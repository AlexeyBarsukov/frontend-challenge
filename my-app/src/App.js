import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cats from './components/Cats';
import FavoriteCats from './components/FavoriteCats';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Cats />} />
          <Route exact path="/FavoriteCats" element={<FavoriteCats />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
