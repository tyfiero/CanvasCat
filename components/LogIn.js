import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import SignIn from "../firebase/SignIn";
import Signup from "../firebase/SignUp";

import { useAuth } from "../firebase/AuthContext";

function LogIn({ children }) {
  const [mode, setMode] = useState("default");
  const { currentUser, logout } = useAuth();
  useEffect(() => {
    if (currentUser) {
      setMode("approved");
    } else {
      setMode("default");
    }
  }, [currentUser]);

  return (
    <div className="w-full h-full fade-effect-quick">
      {mode === "signIn" && <SignIn />}
      {mode === "signUp" && <Signup setMode={setMode} />}
      {mode === "approved" && <>{children}</>}
      {(mode === "signIn" || mode === "signUp") && (
        <button
          className="flex items-center gap-2 px-4 py-2 mt-2 text-black transition text-md rounded-xl hover:scale-110 fade-effect-quick"
          onClick={() => setMode("default")}
        >
          <FaArrowLeft /> Back
        </button>
      )}
      {mode !== "default" && <div className="flex flex-col"></div>}
      {mode === "default" && (
        <div className="flex flex-col w-1/3 h-full gap-2 mx-auto">
          <h1 className="mt-10 heading-lg">Welcome!</h1>
          <button className="button2" onClick={() => setMode("signUp")}>
            Sign up
          </button>
          <button className="button" onClick={() => setMode("signIn")}>
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}

export default LogIn;
