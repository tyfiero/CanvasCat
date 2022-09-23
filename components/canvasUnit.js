import React from "react";
import Loader from "./Loader";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import { UserContext } from "../firebase/context";
import { useAuth } from "../firebase/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Link from "next/link";
import { FaCoins } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { sendAllState, sendAllTypeState } from "./states";
import { atom, selector, useRecoilState } from "recoil";
// import { responsesState } from "./states";
function CanvasUnit({ title, kind, description, qContext, type }) {
  const [text, setText] = React.useState("");
  const [aiLoading, setAiLoading] = React.useState(false);
  const [responseRecieved, setResponseRecieved] = React.useState(false);
  const [credits, setCredits] = React.useState(0);
  const { aiCredits } = React.useContext(UserContext);
  const { currentUser } = useAuth();

  const [sendAll, setSendAll] = useRecoilState(sendAllState);
  const [sendAllType, setSendAllType] = useRecoilState(sendAllTypeState);

  // console.log(responses);
  React.useEffect(() => {
    if (sendAll && type === sendAllType) {
      if (aiLoading) {
        console.log("Please wait for the first request to load");
      } else {
        if (credits >= 1) {
          setAiLoading(true);
          sendToAI({ input: qContext, type: "new", kind: kind });
        } else {
          setResponseRecieved(false);
          setText(
            "No credits remaining, you can purchase more or upgrade your plan in the billing menu."
          );
          setResponseRecieved(true);
        }
      }
      setSendAll(false);
    }
  }, [sendAll]); // eslint-disable-line react-hooks/exhaustive-deps


  
  React.useEffect(() => {
    // let test = responses;
    // setResponses([...responses, "ty"]);

    if (aiCredits) {
      setCredits(aiCredits);
    }
  }, [aiCredits]);
  React.useEffect(() => {
    getTokenAmount();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deduct = async (values) => {
    let uid = currentUser.uid;

    let newBalance = (credits - values).toFixed(1);
    const ref = doc(getFirestore(), "users", uid);
    const docSnap = await updateDoc(ref, { credits: newBalance });
    setCredits(newBalance);
  };

  const getTokenAmount = async (values) => {
    let uid = currentUser.uid;

    const ref = doc(getFirestore(), "users", uid);
    const docSnap = await getDoc(ref);
    // console.log(docSnap)
    if (docSnap.exists()) {
      setCredits(docSnap.data().credits);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const sendToAI = async (data) => {
    // let formData = values.input;
    // let formType = values.type;
    setResponseRecieved(false);
    let uid = currentUser.uid;
    await axios({
      method: "POST",
      url: "/api/openAI",
      data: {
        input: data.input,
        user: uid,
        type: "plan",
        kind: kind,
      },
      // headers: headers,
    })
      .then((response) => {
        // console.log("Status: " + response.status);
        // console.log("limit: " + response.headers?.get('X-RateLimit-Limit'));
        // console.log("remaining: " + response.headers?.get('X-RateLimit-Remaining'));

        if (text.length > 0) {
          setText(text + " \n" + response.data.results.trimStart());
        } else {
          setText(response.data.results.trimStart());
        }
        // dispatch(gpt3OutputAction(aiResponse));
        setResponseRecieved(true);
        if (sendAll && type === "canvas") {
          deduct(9);
        } else if (sendAll && type === "identity") {
          deduct(4);
        } else if (sendAll && type === "swot") {
          deduct(4);
        } else {
          deduct(1);
        }
        // if(formType === "new"){

        // deduct(1);
        // }else{
        //   deduct(1.5);
        // }
        setAiLoading(false);

        return response;
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 429") {
          setResponseRecieved(true);
          setAiLoading(false);
          setText("Rate limit exceeded, to many requests sent in one minute ");
          //   dispatch(gpt3OutputAction(aiResponse));
        } else {
          setResponseRecieved(true);
          setAiLoading(false);
          setText("Something went wrong. Please try again later.");
          //   dispatch(gpt3OutputAction(aiResponse));
        }

        // return "Sorry, an Error occured";
      });
  };

  return (
    <div>
      <div className="relative flex flex-col p-5 ring-2 ring-2-bl rounded-xl group fade-effect-quick">
        {/* <h3 className="p-0 m-0 text-base fre">{title}</h3> */}
        <p className="text-sm">{description}</p>
        {/* <p className="text-sm">{responses[0]}</p> */}
        <button
          className="absolute top-0 right-0 px-2 nun text-base py-0 card__btn_next  flex items-center justify-center md:hover:scale-105  md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl  transition duration-500"
          onClick={() => {
            if (aiLoading) {
              console.log("Please wait for the first request to load");
            } else {
              // setGPT3Status(true);
              if (credits >= 1) {
                setAiLoading(true);
                // setoldInput("")
                sendToAI({ input: qContext, type: "new", kind: kind });
              } else {
                setResponseRecieved(false);
                // setoldInput("")
                setText(
                  "No credits remaining, you can purchase more or upgrade your plan in the billing menu."
                );
                // dispatch(gpt3OutputAction(aiResponse));
                setResponseRecieved(true);
              }
            }
          }}
        >
          <div className="flex items-center gap-3 ">
            <p className=" text-t-pd dark:text-t-pd">Ask AI</p>
            <div className="flex items-center gap-0 ">
              <p className="text-lg text-slate-500 dark:text-slate-500">1</p>
              <BsCoin className="scale-90" />
            </div>
          </div>
        </button>
        <div className="absolute left-[50%] top-[50%]">
          {" "}
          <Loader show={aiLoading} />
        </div>
        <TextareaAutosize
          className="w-full h-auto textarea-tw min-h-[5em]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="..."
        ></TextareaAutosize>
        <div className="flex flex-col justify-start gap-0">
          <div className="flex items-center gap-2">
            <p className="pt-1 text-lg font-bold text-left text-t-pd">
              {aiCredits}
            </p>
            <FaCoins className="scale-125 text-t-pd" />
          </div>

          <Link href={"/buy-credits"}>
            <button className="flex transition cursor-pointer md:active:scale-95 fade-effect w-fit">
              <p className=" text-t-pd md:hover:text-t-bd dark:text-t-pd !mb-0 underline text-xs">
                Get More Credits
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CanvasUnit;
