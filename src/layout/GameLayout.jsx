import { Outlet, Link } from 'react-router-dom';

const GameLayout = () => {
  return (
    <>
      <Link to="/" className="home-link">
        Home
      </Link>
      <Outlet />
    </>
  );
};

export default GameLayout;
