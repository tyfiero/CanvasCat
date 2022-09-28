import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../firebase/AuthContext";
import { UserContext } from "../firebase/context";
import axios from "axios";
import { useRouter } from "next/router";
import LogIn from "../components/LogIn";
import { FaCoins, FaSignOutAlt } from "react-icons/fa";

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
    <div className="flex items-center justify-center w-full h-full fade-effect-quick page-container lg:px-80">
      <LogIn>
        <div className="flex flex-col w-2/3 gap-5 box">
          <h1 className="text-2xl font-bold text-center">Account</h1>
          <p className="text-xl">
            <strong>Email:</strong>{" "}
            {currentUser ? currentUser?.email : "Not Signed In"}
          </p>
          <p className="text-xl">
            <strong>Credits:</strong> {aiCredits || 0}
          </p>
          <Link href={"/buy-credits"}>
            <div className="button2">
              Buy More Credits{" "}
              <FaCoins className="mt-1 text-orange-800 scale-125" />
            </div>
          </Link>

          <button className="button" onClick={handleLogout}>
            Sign out <FaSignOutAlt />
          </button>
        </div>
      </LogIn>
    </div>
  );
}

export default Account;
