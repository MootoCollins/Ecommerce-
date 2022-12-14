import { Link, useMatch, useResolvedPath } from "react-router-dom";



export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={require("../logo.png")} alt="logo" />
      </Link>
      <ul>
        <CustomLink to="/Categories">Categories</CustomLink>
        <CustomLink to="/Services">Services</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/SignIn">Sign In </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
