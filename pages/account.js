import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../firebase/AuthContext";
import { UserContext } from "../firebase/context";
import axios from "axios";
import { useRouter } from "next/router";
import LogIn from "../components/LogIn";

function Account() {
  const { currentUser, logout } = useAuth();
  const { aiCredits } = useContext(UserContext);
  // const [appSumo, setAppSumo] = React.useState(false);
  // const [appSumoCode, setAppSumoCode] = React.useState("");
  const router = useRouter();
  async function handleLogout() {
    try {
      await logout();
      toast("Sign out Successful!");
      router.push("/");
    } catch {
      console.log("Failed to sign out");
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-[100vh] fade-effect-quick">
      <LogIn>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold">Account</h1>
          <p className="text-xl">
            <strong>Email:</strong>{" "}
            {currentUser ? currentUser?.email : "Not Signed In"}
          </p>
          <p className="text-xl">
            <strong>Credits:</strong> {aiCredits || 0}
          </p>
          <Link href={"/buy-credits"}>
            <div className="flex items-center gap-2 px-4 py-2 text-white transition cursor-pointer text-md bg-t-bl rounded-xl hover:scale-110 hover:ring-4 ring-t-bd fade-effect-quick">
              Buy More Credits
            </div>
          </Link>

          <button
            className="flex items-center gap-2 px-4 py-2 text-white transition text-md bg-t-pd rounded-xl hover:scale-110 hover:ring-4 ring-t-bd fade-effect-quick"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </LogIn>
    </div>
  );
}

export default Account;
