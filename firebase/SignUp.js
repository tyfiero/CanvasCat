import Link from "next/link";
import React, { useRef, useState } from "react";
import { useAuth } from "./AuthContext";
import { db } from "./firebase";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function Signup({ setMode }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT BEGIN");
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
          // console.log(user.user.uid);
          // Create a new post in firestore
          const createUser = async (user) => {
            console.log(user.user.uid);
            const ref = doc(db, "users", user.user.uid);

            let dataForCreation = {
              uid: user.user.uid,
              credits: 50,
              createdAt: serverTimestamp(),
            };

            await setDoc(ref, dataForCreation)
              .then(() => {
                toast.success("Account Created!");
              })
              .catch((error) => {
                toast.error("Error occured :( ");
                console.log("It failed!" + error);
              });
          };
          createUser(user);
        })
        .catch((error) => {
          console.log(error);
        });

      setMode("approved");
      console.log("success!");
    } catch (error) {
      console.log("FAIL");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="w-full fade-effect-quick page-container">
        <div className="sm:w-full md:w-2/3 xl:w-1/3 box">
          <h2 className="mb-4 text-2xl text-center heading-md">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div id="email">
              <h4 className="font-bold !mb-0">Email</h4>
              <input
                type="email"
                ref={emailRef}
                required
                className="w-full textarea-tw"
              />
            </div>
            <div id="password">
              <h4 className="font-bold !mb-0">Password</h4>
              <input
                type="password"
                className="w-full textarea-tw"
                ref={passwordRef}
                required
              />
            </div>
            <div id="password-confirm">
              <h4 className="font-bold !mb-0">Password Confirmation</h4>

              <input
                className="w-full textarea-tw"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </div>

            <div className="flex justify-center w-full">
              <button
                disabled={loading}
                className="button !bg-teal-300 !px-10 w-2/3 mx-auto "
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
