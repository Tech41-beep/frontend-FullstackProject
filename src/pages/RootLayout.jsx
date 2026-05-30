import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const RootLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(180deg,_#07111f_0%,_#0b1727_38%,_#f5f7fb_38%,_#f5f7fb_100%)] text-slate-900">
      <Header onLoginClick={() => navigate('/login')} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
