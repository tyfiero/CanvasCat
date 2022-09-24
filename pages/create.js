import BusinessCanvas from "../components/businessCanvas";
import LogIn from "../components/LogIn";
import { UserContext } from "../firebase/context";
import { React, useContext } from "react";
function Create() {
  const { aiCredits } = useContext(UserContext);

  return (
    <div className="page-container !px-0">
      <LogIn>
        <BusinessCanvas
          credits={aiCredits}
          title={"Project title"}
          description={"Project description that explains what the project is."}
        />
      </LogIn>
    </div>
  );
}

export default Create;
