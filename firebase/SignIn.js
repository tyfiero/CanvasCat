import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";
import { resetPassword } from "./AuthContext";
import { Auth } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(false);
  const [passEmail, setPassEmail] = useState("");

  const forgotPassword = (Email) => {
    if (typeof window !== "undefined") {
      sendPasswordResetEmail(auth, Email)
        .then(function () {
          toast.success("Please check your email for reset instructions");
          setPass(false);
        })
        .catch(function (e) {
          console.log(e);
        });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      toast.success("Login Successful!");
      console.log("success!");
    } catch (error) {
      console.log("fail!");
      toast.error("Email or Password is incorrect");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="fade-effect-quick">
        <div>
          <h2 className="mb-4 text-2xl text-center">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div id="email" className="flex flex-col gap-1">
              <h4 className="font-bold !mb-0">Email</h4>
              <input
                type="email"
                ref={emailRef}
                className="textarea-tw"
                required
              />
            </div>
            <div id="password" className="my-3">
              <h4 className="font-bold !mb-0">Password</h4>
              <input
                type="password"
                className="textarea-tw"
                ref={passwordRef}
                required
              />
            </div>
            <button
              disabled={loading}
              className="px-4 py-2 mt-2 mb-2 text-xl text-black transition bg-t-pl rounded-xl hover:scale-110 hover:ring-4 ring-t-pd"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div>
            {pass ? (
              <div className="flex flex-col gap-2 p-2 ring-2 rounded-xl">
                <p>Enter your email to send the reset email to</p>
                <input
                  type="text"
                  className="textarea-tw"
                  value={passEmail}
                  onChange={(e) => setPassEmail(e.target.value)}
                />
                <button
                  className="px-4 py-2 mt-2 mb-2 text-xl text-black transition bg-t-bl rounded-xl hover:scale-110 hover:ring-4 ring-t-bd"
                  onClick={() => forgotPassword(passEmail)}
                >
                  Submit
                </button>
              </div>
            ) : (
              <button
                onClick={() => setPass(!pass)}
                className="mt-2 mb-2 font-bold text-center w-100"
              >
                {" "}
                Forgot Password?
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
