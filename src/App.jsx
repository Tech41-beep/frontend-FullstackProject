import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import NotFoundPage from './pages/notfound';
import Company from './pages/company';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="company" element={<Company />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
