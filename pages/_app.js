import "../styles/globals.css";
import { AuthProvider } from "../firebase/AuthContext";
import { Toaster } from "react-hot-toast";
import { useUserData } from "../firebase/hooks";
import { UserContext } from "../firebase/context";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FullLoader from "../components/layout/FullLoader";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //Loading animation logic
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  return (
    <AuthProvider>
      <RecoilRoot>
        <UserContext.Provider value={userData}>
          <Toaster />
          <Layout>
            <FullLoader show={loading} />
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </RecoilRoot>
    </AuthProvider>
  );
}

export default MyApp;
