import "./App.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import MessageBoard from "./MessageBoard";
import AllPosts from "./AllPosts";
import PostView from "./PostView";
import NavBar from "./NavBar";
import { createContext } from "react";
import { SupaboardUserInfo, useSession } from "./use-session";
import { Welcome } from "./Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

export const UserContext = createContext<SupaboardUserInfo>({
  session: null,
  profile: null,
});

function Layout() {
  const supaboardUserInfo = useSession();
  return (
    <>
      <UserContext.Provider value={supaboardUserInfo}>
        <NavBar />
        <Outlet />
      </UserContext.Provider>
    </>
  );
}
