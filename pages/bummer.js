import Link from "next/link";
import React from "react";
import { FaHandLizard, FaRegHandPeace, FaSmile } from "react-icons/fa";
import { TbMoodHappy } from "react-icons/tb";

function Bummer() {
  return (
    <div className="page-container">
      <p className="!my-10 text-3xl">Fair enough, you do you! </p>
      <p className="!my-10 text-xl">
        You&apos;re missing out on some pretty cool tech tho
      </p>
      <div className="flex gap-2 mb-5">
        <Link href={"https://www.google.com"}>
          <a className="button">
            Bye bye <FaRegHandPeace className="ml-2 scale-125" />
          </a>
        </Link>
        <Link href={"/create"}>
          <a className="button2">
            Wait I changed my mind!!
            <TbMoodHappy className="ml-2 scale-150" />
          </a>
        </Link>
      </div>
      <iframe
        src="https://giphy.com/embed/2iIJkRSLiYxFK"
        width="480"
        height="281"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/picture-annoyed-spongebob-2iIJkRSLiYxFK">
          via GIPHY
        </a>
      </p>
    </div>
  );
}

export default Bummer;
