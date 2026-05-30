import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/herosection';

const HomePage = () => {
  const navigate = useNavigate();

  return <HeroSection onLoginClick={() => navigate('/login')} />;
};

export default HomePage;
