import Link from "next/link";
import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext";
import { useAuth } from "./AuthContext";
// import { Link, useHistory } from "react-router-dom";
import { db } from "./firebase";
import { serverTimestamp, doc, getFirestore, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function Signup({ setMode }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const { currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT BEGIN");
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      // setError("");
      // console.log(currentUser);

      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
          // console.log(user.user.uid);

          // console.log(currentUser.uid);

          // Create a new post in firestore
          const createUser = async (user) => {
            console.log(user.user.uid);
            const ref = doc(db, "users", user.user.uid);
            // Tip: give all fields a default value here

            let dataForCreation = {
              uid: user.user.uid,
              credits: 10,
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

      //   history.push("/");
      setMode("approved");
      console.log("success!");
    } catch (error) {
      // setError("Failed to create an account");
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
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
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
