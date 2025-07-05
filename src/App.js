import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />  {/* <-- to dodajesz */}
        </Routes>
      </Container>
    </main>
  );
};

export default App;
