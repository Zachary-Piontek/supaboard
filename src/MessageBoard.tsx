import { Link, Outlet } from "react-router-dom";

export default function MessageBoard() {
  return (
    <div className="pageDiv">
      <Link to="/1">
        <h1 className="board-header">Message Board</h1>
      </Link>
      <Outlet />
    </div>
  );
}
