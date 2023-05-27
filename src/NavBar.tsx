import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src="/vite.svg" alt="Vite Logo" />
        </Link>
        <ul>
          <li>
            <Link to="/1">
              <span>Message Board</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
