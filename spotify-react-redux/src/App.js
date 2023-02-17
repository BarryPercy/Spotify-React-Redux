import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Playbar from './components/Playbar'
import Album from './components/Album'
import Artist from './components/Artist'
import './App.css';

function App() {
  return (
    <BrowserRouter>
          <div id="top">
            <Sidebar/>
            <Routes>
              <Route
                  path="/"
                  element={<Home/>}
                />
              <Route
                  path="/album/:id"
                  element={<Album/>}
                />
              <Route
                  path="/artist/:id"
                  element={<Artist/>}
                />
            </Routes>
          </div>
          <Playbar/>
    </BrowserRouter>
  );
}

export default App;
