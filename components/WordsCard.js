import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { wordAction } from "../../../../redux/actions";
// import { similarRequest } from "../../../../redux/actions";
import Loader from "./Loader";

//WordsCard.js global variables
var similarWordsItem;
var similarWordsWord;
function WordsCard(props) {
  //Redux shit
  // const wordRedux = useSelector((state) => state.word);
  // const dispatch = useDispatch();
  // const similarWordsRedux = useSelector((state) => state.boolean);

  //Logic
  const axios = require("axios");

  //similar words state management
  const [isRelatedWord, setIsRelatedWord] = React.useState([]);
  const [showRelatedWord, setShowRelatedWord] = useState(true);
  const [similarWordsWord, setSimilarWordsWord] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "POST",
      url: "/api/similarWords",
      data: {
        input: props.word,
      },
      // headers: headers,
    })
      .then(function (response) {
        // console.log(JSON.stringify(response.data.results));
        let similarWordsItemOne = response.data.results[(1, 2)];

        // let [word1, word2, word3, word4, word5] = [
        //   response.data[0].word,
        //   response.data[1].word,
        //   response.data[2].word,
        //   response.data[3].word,
        //   response.data[4].word,
        // ];

        let testArray = [
          response.data.results[0].word,
          response.data.results[1].word,
          response.data.results[2].word,
          response.data.results[3].word,
          response.data.results[4].word,
          response.data.results[5].word,
        ];

        // console.log(response.data[0].word);
        // console.log(response.data[1].word);
        // console.log(response.data[2].word);

        // console.log(similarWordsItemOne);
        setSimilarWordsWord(similarWordsItemOne.word);
        setIsRelatedWord(testArray);
        // setUpdate(!update)
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setSimilarWordsWord("error");

        setLoading(false);
      });
  }, [props.word]); // eslint-disable-line react-hooks/exhaustive-deps

  // This will only run when one of those variables change

  return (
    <div
      className="flex flex-col items-center min-w-[12em] max-w-[16em] rounded-lg  "
      // onClick={() => {
      //   dispatch(similarRequest(true));
      //   setShowRelatedWord(!showRelatedWord);
      // }}
    >
      <p className="text-t-bl">Similar Words:</p>
      {/* <p>Words with Similar Meanings:</p> */}
      {showRelatedWord ? (
        <div className="flex flex-wrap justify-center capitalize gap-x-2">
          {loading ? (
            <div className="my-2">
              <Loader show={true} className="scale-50 " />
            </div>
          ) : (
            <>
              <p className="text-sky-700 dark:text-white">{isRelatedWord[0]}</p>
              <p className="text-pink-700 dark:text-pink-100">
                {isRelatedWord[1]}
              </p>
              <p className="text-green-700 dark:text-green-100">
                {isRelatedWord[2]}
              </p>
              <p className="text-violet-700 dark:text-violet-100">
                {isRelatedWord[3]}
              </p>
              <p className="text-yellow-700 dark:text-yellow-100">
                {isRelatedWord[4]}
              </p>
              <p className="text-cyan-700 dark:text-cyan-100">
                {isRelatedWord[5]}
              </p>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default WordsCard;
