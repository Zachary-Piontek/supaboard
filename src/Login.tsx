import Dialog from "./Dialog";
import { useState } from "react";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("login");
          }}
        >
          Log in
        </button>
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("signup");
          }}
        >
          sign up
        </button>
      </div>
      <Dialog
        open={showModal}
        dialogStateChange={(open) => setShowModal(open)}
        contents={<>{authMode}</>}
      />
    </>
  );
}
