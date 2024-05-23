import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link to="/detail/:1">디테일 1 페이지로 이동</Link>
      </div>
      <div>
        <Link to="/detail/:2">디테일 2 페이지로 이동</Link>
      </div>
    </div>
  );
};

export default Home;
