import GPTtool from "../../components/GPT3";
import LogIn from "../../components/LogIn";
import { UserContext } from "../../firebase/context";
import { React, useContext } from "react";

function AIIdeas() {
  const { aiCredits } = useContext(UserContext);

  return (
    <div
      className="px-2 pb-5 
    h-full !border-0 mb-1   m-2 !mr-8 relative rounded-xl wrapped-iframe flex flex-col justify-center items-center fade-effect-quick"
    >
      <LogIn>
        <GPTtool credits={aiCredits} />
      </LogIn>
    </div>
  );
}

export default AIIdeas;
