import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
export function useUserData() {
  let [user, loading, error] = useAuthState(auth);
  if (error) {
    console.log("error in useAuthState hook");
    console.log(error);
  }

  const [paidPlan, setPaidPlan] = useState(null);
  const [aiCredits, setAiCredits] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = doc(getFirestore(), "users", user.uid);
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
