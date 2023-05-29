import { useContext } from "react";
import { UserContext } from "./App";
import { supaClient } from "./supa-client";

export default function UserMenu() {
  const { profile } = useContext(UserContext);

  return (
    <>
      <div>
        <h2>Welcome {profile?.username || "anon"}.</h2>
        <button onClick={() => supaClient.auth.signOut()}>Logout</button>
      </div>
    </>
  );
}
