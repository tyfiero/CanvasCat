// import stringSimilarity from "string-similarity-js";
// import fetch from "node-fetch";
import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import {
  FaClipboardList,
  FaCoins,
  FaPastafarianism,
  FaPlus,
  FaRobot,
  FaSeedling,
} from "react-icons/fa";
import { useAuth } from "../firebase/AuthContext";
import { UserContext } from "../firebase/context";
import Loader from "./Loader";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import TextareaAutosize from "react-textarea-autosize";
import { BiSend } from "react-icons/bi";
import Toggle from "react-toggle";
import {
  BsArrow90DegRight,
  BsArrowRight,
  BsHourglassSplit,
} from "react-icons/bs";
import toast from "react-hot-toast";
import Link from "next/link";

const GPTtool = ({ showButton }) => {
  const [aiLoading, setAiLoading] = useState(false);
  const [warning, setWarning] = useState(true);

  const [GPT3Input, setGPT3Input] = useState("");
  const [GPTJInput, setGPTJInput] = useState("");
  const [oldInput, setoldInput] = useState("");

  const [GPT3Output, setGPT3Output] = useState("");
  // const [GPT3Status, setGPT3Status] = useState(false);
  // const [GPTJStatus, setGPTJStatus] = useState(false);

  const { currentUser, logout } = useAuth();
  const { aiCredits } = useContext(UserContext);

  const [responseRecieved, setResponseRecieved] = useState(false);

  const [credits, setCredits] = useState(0);

  // const { register, handleSubmit } = useForm({});
  const [aiResponse, setAiResponse] = useState("");

  const [charLength, setCharLength] = useState(0);

  useEffect(() => {
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
      // console.log("Document data:", docSnap.data());
      setCredits(docSnap.data().credits);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  //gpt3
  const onSubmitForm = async (values) => {
    let formData = values.input;
    let formType = values.type;
    setResponseRecieved(false);

    let uid = currentUser.uid;

    await axios({
      method: "POST",
      url: "/api/openAI",
      data: {
        input: formData,
        user: uid,
        type: formType,
      },
      // headers: headers,
    })
      .then((response) => {
        // console.log("Status: " + response.status);
        // console.log("limit: " + response.headers?.get('X-RateLimit-Limit'));
        // console.log("remaining: " + response.headers?.get('X-RateLimit-Remaining'));

        setAiResponse(response.data.results);
        setResponseRecieved(true);
        if (formType === "new") {
          deduct(1);
        } else {
          deduct(1.5);
        }
        setAiLoading(false);

        return response;
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 429") {
          setResponseRecieved(true);
          setAiLoading(false);
          setAiResponse(
            "Rate limit exceeded, to many requests sent in one minute "
          );
        } else {
          setResponseRecieved(true);
          setAiLoading(false);
          setAiResponse("Something went wrong. Please try again later.");
        }
      });
  };

  return (
    <div className=" px-2 pb-5 pt-1 ring-4 rounded-xl !ring-t-pl bg-clear-pl3 fade-effect-quick  ">
      <div className="flex flex-col items-center max-w-[60em] relative">
        {warning ? (
          <>
            {" "}
            <div className="flex flex-col w-full ">
              <div className="flex flex-col w-full ">
                <div className="flex items-center justify-between ai-output-box bg-white/80 min-h-[20em] dark:bg-slate-800/60">
                  <h3 className="text-2xl text-gray-700 nun dark:text-t-pd">
                    {"AI Disclaimer"}
                  </h3>
                  <p className="text-gray-700">
                    {
                      "This feature is still in beta. You are interacting with AI, not a human. The AI can return some wild content, and anything returned from the AI does not represent the views of ideaisland. Use this feature at your own risk."
                    }
                  </p>
                  <button
                    className="w-[14em] h-[2em] card__btn_next right-[50px] flex items-center justify-center md:hover:scale-105 md:transition-transform md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl "
                    onClick={() => {
                      setWarning(!warning);
                    }}
                  >
                    <p className="pl-2 text-t-pd dark:text-t-pd !mb-0">
                      Agree and Continue
                    </p>

                    <BsArrowRight
                      style={{ fontSize: "32px" }}
                      className="pl-2 text-t-pd"
                    />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex flex-col items-center justify-center w-full h-Full ">
              <div className="flex items-center w-full">
                <div className="flex items-center gap-2">
                  <p className="pt-1 text-lg font-bold text-left text-t-pd">
                    {credits}
                  </p>
                  <p className="pt-1 text-xs text-left text-t-pd">
                    Credits Remaining
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Link href={"/buy-credits"}>
                  <button className="flex items-center justify-center transition cursor-pointer md:hover:scale-105 md:active:scale-95 fade-effect">
                    <p className=" text-t-pd dark:text-t-pd !mb-0 underline">
                      Buy More Credits
                    </p>
                  </button>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-start w-full">
                  <p className="pt-1 text-lg font-bold text-left text-t-pd">
                    Input:
                  </p>
                </div>
                <TextareaAutosize
                  className="w-[99%] rounded-md nun   textarea-tw dark:!bg-slate-900/90 dark:text-white"
                  // defaultValue={contentTitle}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    setGPT3Input(e.target.value);
                  }}
                  value={GPT3Input}
                  placeholder="Write 3-5 words that describe the solution you are looking for. ex: e-commerce advertising tool"
                  maxLength="150"
                ></TextareaAutosize>

                <div className="flex items-center justify-center min-w-[30em] w-full mt-2">
                  <div className="relative group">
                    <div className="absolute transition duration-1000 rounded-full opacity-0 -inset-1 bg-gradient-to-r from-t-pl via-t-pm via-violet-400 to-t-pd blur-sm group-hover:opacity-100 group-hover:duration-200 animate-gradient-xy"></div>
                    <button
                      className="w-[8em] h-[2em] card__btn_next right-[50px] flex items-center justify-center md:hover:scale-105 md:transition-transform md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl mt-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl "
                      type="submit"
                      onClick={() => {
                        if (aiLoading) {
                          console.log(
                            "Please wait for the first request to load"
                          );
                        } else {
                          // setGPT3Status(true);
                          if (credits >= 1) {
                            setAiLoading(true);
                            setoldInput("");
                            onSubmitForm({ input: GPT3Input, type: "new" });
                          } else {
                            setResponseRecieved(false);
                            setResponseRecievedGPTJ(false);
                            setoldInput("");
                            setAiResponse(
                              "No credits remaining, you can purchase more or upgrade your plan in the billing menu."
                            );
                            dispatch(gpt3OutputAction(aiResponse));
                            setResponseRecieved(true);
                          }
                        }
                      }}
                    >
                      {aiLoading ? (
                        <>
                          <p className="pl-2 text-t-pd dark:text-t-pd">
                            Sending...
                          </p>

                          <BsHourglassSplit
                            style={{ fontSize: "32px" }}
                            className="pl-2 text-t-pd dark:text-t-pd"
                          />
                        </>
                      ) : (
                        <>
                          <div className="flex flex-col items-center mt-2 leading-3">
                            <p className="pl-2 text-t-pd dark:text-t-pd !mb-1">
                              Send to AI
                            </p>
                            <p className="pl-2 text-xs text-slate-500 dark:text-slate-500 !mb-1">
                              (1 Credit)
                            </p>
                          </div>

                          <BiSend
                            style={{ fontSize: "32px" }}
                            className="pl-2 text-t-pd"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <p className="pt-1 text-lg font-bold text-left text-t-pd">
                Results:
              </p>

              <div className="flex items-center w-full text-left ai-output-box bg-white/80 dark:bg-slate-800/60 min-w-30em">
                {oldInput.length > 0 && <p>{oldInput.trimStart() + " "}</p>}
                <Loader show={aiLoading} />

                {responseRecieved && <p>{aiResponse.trimStart()}</p>}
                {!responseRecieved && !aiLoading && (
                  <p className="text-gray-400">
                    {"AI output will display here"}
                  </p>
                )}
              </div>

              <div className="flex justify-center w-full mt-2">
                {/* <button
                  className=" px-3 h-[2em] card__btn_next gap-2 flex items-center justify-center md:hover:scale-105 md:transition-transform md:active:scale-95 fade-effect  cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl  "
                  onClick={() => {
                    if (aiResponse.length > 0) {
                      navigator.clipboard.writeText(aiResponse);
                      toast.success("Copied!");
                    } else {
                      toast.error("No text to copy");
                    }
                  }}
                >
                  <FaClipboardList className="text-t-pd" />
                  <p className="text-lg text-t-pd dark:text-t-pd !mb-0">
                    Copy Text
                  </p>
                </button> */}
                {/* <button
                  className="w-[12em] h-[2em] card__btn_next right-[50px] flex items-center justify-center md:hover:scale-105 md:transition-transform md:active:scale-95 fade-effect  cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl "
                  onClick={() => {
                    if (aiLoading) {
                      console.log("Please wait for the first request to load");
                    } else {
                      //  setGPT3Status(true);
                      setoldInput(oldInput + " " + aiResponse);
                      setAiLoading(true);
                      onSubmitForm({ input: aiResponse, type: "expand" });
                    }
                  }}
                >
                  {aiLoading && oldInput.length > 0 ? (
                    <>
                      <p className="text-lg text-t-pd !mb-0">Expanding...</p>{" "}
                    </>
                  ) : (
                    <>
                      <p className="text-lg text-t-pd dark:text-t-pd !mb-0">
                        Expand Answer
                      </p>
                      <p className="ml-2 text-xs text-slate-600 dark:text-slate-600 !mb-0">
                        (1.5 credits)
                      </p>
                    </>
                  )}
                </button> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GPTtool;
