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
      <div className="fade-effect-quick">
        <div>
          <h2 className="mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div id="email">
              <p>Email</p>
              <input
                type="email"
                ref={emailRef}
                required
                className="textarea-tw"
              />
            </div>
            <div id="password">
              <p>Password</p>
              <input
                type="password"
                className="textarea-tw"
                ref={passwordRef}
                required
              />
            </div>
            <div id="password-confirm">
              <p>Password Confirmation</p>

              <input
                className="textarea-tw"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </div>

            <div className="flex justify-center w-full">
              <button
                disabled={loading}
                className="px-4 py-2 mt-2 mb-5 text-xl text-white transition bg-t-bl rounded-xl hover:scale-110 hover:ring-4 ring-t-bd"
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
