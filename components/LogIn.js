import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import SignIn from "../firebase/SignIn";
import Signup from "../firebase/SignUp";

import { useAuth } from "../firebase/AuthContext";

function LogIn({ children }) {
  const [mode, setMode] = useState("default");
  const [randomizeAll, setRandomizeAll] = useState(false);
  const { currentUser, logout } = useAuth();
  useEffect(() => {
    if (currentUser) {
      setMode("approved");
    } else {
      setMode("default");
    }
  }, [currentUser]);

  return (
    <div className="w-full fade-effect-quick">
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
        <div className="flex flex-col gap-2">
          <button
            className="px-4 py-2 text-xl text-white transition bg-t-bl rounded-xl hover:scale-110 hover:ring-4 ring-t-bd"
            onClick={() => setMode("signUp")}
          >
            Sign up
          </button>
          <button
            className="px-4 py-2 text-xl text-black transition bg-t-pl rounded-xl hover:scale-110 hover:ring-4 ring-t-pd"
            onClick={() => setMode("signIn")}
          >
            Sign in
          </button>
        </div>
      )}

      {/* <Loader show className="" /> */}
    </div>
  );
}

export default LogIn;
