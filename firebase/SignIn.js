import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";
import { resetPassword } from "./AuthContext";
import { Auth } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { FaArrowRight } from "react-icons/fa";
export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(false);
  const [error, setError] = useState(false);
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
          setError(true);
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
      <div className="w-full fade-effect-quick page-container">
        <div className="sm:w-full md:w-2/3 xl:w-1/3 box">
          <h2 className="mb-4 text-2xl text-center heading-md">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div id="email" className="flex flex-col gap-1">
              <h4 className="font-bold !mb-0">Email</h4>
              <input
                type="email"
                ref={emailRef}
                className="textarea-tw w-full"
                required
              />
            </div>
            <div id="password" className="my-3 ">
              <h4 className="font-bold !mb-0">Password</h4>
              <input
                type="password"
                className="w-full textarea-tw"
                ref={passwordRef}
                required
              />
            </div>
            <button
              disabled={loading}
              className="button !bg-teal-300 !px-10 w-2/3 mx-auto "
              type="submit"
            >
              Sign In <FaArrowRight />
            </button>
          </form>
          <div className="flex justify-center w-full">
            {pass ? (
              <div className="flex flex-col w-2/3 gap-2 p-2 !mt-5 ring-2 ring-orange-500 rounded-xl">
                <p>What&apos;s your email?</p>
                <input
                  type="text"
                  className="textarea-tw"
                  value={passEmail}
                  onChange={(e) => setPassEmail(e.target.value)}
                />
                {error && (
                  <p className="text-red-600">
                    Error, please{" "}
                    <a
                      href="mailto:tyfierodev@gmail.com"
                      className="text-teal-500 underline hover:text-teal-800"
                    >
                      contact me
                    </a>
                  </p>
                )}
                <button
                  className="button2"
                  onClick={() => {
                    forgotPassword(passEmail);
                  }}
                >
                  Submit
                </button>
              </div>
            ) : (
              <button
                onClick={() => setPass(!pass)}
                className="mt-4 mb-2 text-center w-100 hover:underline"
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
