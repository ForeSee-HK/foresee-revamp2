import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
