import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>Abdo blogs</h1>

      <Link to="/">Home</Link> &nbsp;
      <Link to="/create">New blog</Link>
    </div>
  );
}; 

export default NavBar;
