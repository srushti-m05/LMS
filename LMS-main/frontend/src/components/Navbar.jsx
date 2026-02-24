import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/subjects">Subjects</Link>
       <Link to="/notes">Notes</Link>
      <Link 
        to="/login"
        onClick={() => localStorage.removeItem("user")}
      >

        Logout
      </Link>
    </nav>
  );
}
