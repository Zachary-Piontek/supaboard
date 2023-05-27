import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">
          <div className="supaboard-div">
            <img
              className="supaboard-logo"
              src="/supaboard-logo-clear.png"
              alt="logo"
            />
            <img
              className="supaboard-logo-text"
              src="/supaboard-name.png"
              alt="name"
            />
          </div>
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
