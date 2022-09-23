import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useSelector, useDispatch } from "react-redux";
// import { logIn, userDataRedux } from "../redux/actions";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
// import { useSelector, useDispatch } from "react-redux";
// import { userNameAction } from "../redux/actions";
// Custom hook to read  auth record and user profile doc
export function useUserData() {
  // const userNameRedux = useSelector((state) => state.userName);

  let [user, loading, error] = useAuthState(auth);

  if (error) {
    console.log("error in useAuthState hook");
    console.log(error);
  }
  // console.log(useAuthState(auth))
  //   const [username, setUsername] = useState(null);
  const [paidPlan, setPaidPlan] = useState(null);
  const [aiCredits, setAiCredits] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = doc(getFirestore(), "users", user.uid);
      // const ref = firestore.collection("users").doc(user.uid);

      unsubscribe = onSnapshot(ref, (doc) => {
        setAiCredits(doc.data()?.credits);
      });
    } else {
      setAiCredits(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, aiCredits };
}
