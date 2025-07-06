import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite'; // ✅ tylko ten
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/favorite" element={<Favorite />} /> {/* ✅ tylko raz */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;



