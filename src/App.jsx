import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import RegisterPage from './pages/Register.jsx';
import PostRegisterPage from './pages/PostRegister.jsx';
import CategoryPage from './pages/CategoryPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/registrate" element={<RegisterPage />} />
      <Route path="/post-registro" element={<PostRegisterPage />} />
      <Route path="/categoria" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;