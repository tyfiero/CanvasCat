import Link from "next/link";
import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext";
import { useAuth } from "../firebase/AuthContext";
// import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { db } from "../firebase/firebase";
import { serverTimestamp, doc, getFirestore, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
function Appsumo() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  // const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const { currentUser } = useAuth();
  const [appSumoCode, setAppSumoCode] = React.useState("");
  const redeemCode = async (code) => {
    // console.log(creditNum);
    await axios({
      method: "POST",
      url: "/api/appsumo",
      data: {
        code: code,
      },
      // headers: headers,
    })
      .then((response) => {
        console.log(response);
        // toast.success("Redemption Successful!");
      })
      .catch((error) => {
        console.log(error);
        // toast.error("Redemption Failed :(");
      });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT BEGIN");

    await redeemCode(appSumoCode)
      .then((response) => {
        console.log(response);
        toast.success("Redemption Successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Redemption Failed :(");
        return;
      });
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
              credits: 20,
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
      //   setMode("approved");
      console.log("success!");
    } catch (error) {
      // setError("Failed to create an account");
      console.log("FAIL");
      console.log(error);
    }

    setLoading(false);
  }
  return (
    <div className="flex items-center justify-center w-full h-[100vh] fade-effect-quick">
      {" "}
      {/* <div className="flex flex-col items-center p-2 ring-2 rounded-xl bg-white/60">
        <img src="/appsumo-logo.svg" alt="" />



        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-center">
            Hello SumoLings! Redeem your code and make an account here.{" "}
          </h2>

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

            <p className="mt-5"> Enter AppSumo code to redeem.</p>
            <input
              type="text"
              placeholder="AppSumo Code"
              value={appSumoCode}
              className="m-2 textarea-tw"
              onChange={(e) => {
                let formatted = e.target.value.trimEnd();
                let formatted2 = formatted.trimStart();

                setAppSumoCode(formatted2);
              }}
            />
           
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
      </div> */}
    </div>
  );
}

export default Appsumo;
