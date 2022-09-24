import React from "react";

function TextSection({ children, title = "", headerClassNames = "" }) {
  return <div className={"md:w-1/2 sm:w-full "}>{children}</div>;
}

export default TextSection;
