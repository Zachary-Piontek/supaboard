import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "./App";
import Login from "./Login";

export default function MessageBoard() {
  const userProfile = useContext(UserContext);

  return (
    <div className="pageDiv">
      <Link to="/1">
        <h1>Message Board</h1>
      </Link>
      {userProfile.session ? (
        <></>
      ) : (
        <h2>
          <Login /> to join discussions
        </h2>
      )}
      <Outlet />
    </div>
  );
}
