import Script from "next/script";

import React from "react";

function PaddleLoader() {
  return (
    <Script
      src="https://cdn.paddle.com/paddle/paddle.js"
      // strategy="beforeInteractive"
      onLoad={(e) => {
        // eslint-disable-next-line
        Paddle.Setup({
          vendor: Number(process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID),
        });
        // console.log("Loaded paddle");
      }}
    />
  );
}

export default PaddleLoader;
