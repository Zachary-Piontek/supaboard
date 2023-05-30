import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { session } = useContext(UserContext);

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
          <li className="navbar-login">
            {session?.user ? <UserMenu /> : <Login />}
          </li>
        </ul>
      </nav>
    </>
  );
}
