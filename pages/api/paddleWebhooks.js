// import { serverTimestamp } from "firebase/firestore";

// import { firebaseAdmin, adminDB } from "../../lib/firebaseAdmin";
import { firebaseAdmin, adminDB } from "../../lib/firebaseAdmin";
// const { verifyPaddleWebhook } = require("verify-paddle-webhook");

export default async function handler(req, res) {
  // console.log(req.body);
  if (!req.body) return res.status(401).json({ error: "No req body found" });
  const { verifyPaddleWebhook } = require("verify-paddle-webhook");
  const querystring = require("querystring");
  // let credits = 0;
  // console.log(req.body);
  // //CREDIT TYPE
  // if (req.body.product_id === "793676") {
  //   credits = 100;
  // } else if (req.body.product_id === "776868") {
  //   credits = 500;
  // }
  // console.log(credits);
  // Request from front end
  if (req.body.client !== "undefined") {
    console.log("Client request");
    let serverTime = Date.now();

    let data = {
      credits: req.body.credits,
      updatedAt: serverTime,
    };
    // console.log(req.body.user);
    saveToFirestore(data, req.body.user)
      .then(() => {
        console.log("firebase func finished, now sending success status");
        res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.log(error);
        console.log(
          "firebase func finished, but failed. Sending failure status"
        );
        res.status(401).json({ error: "Something went wrong :(  " });
      });
  } else {
    // console.log(req.body);
    // console.log("HIT PADDLE WEBHOOK");
    //   console.log(verifyPaddleWebhook.);

    // console.log(verifyPaddleWebhook(process.env.PADDLE_PUBLIC_KEY));

    const webhookData = querystring.parse(req.body);

    if (verifyPaddleWebhook(process.env.PADDLE_PUBLIC_KEY, webhookData)) {
      console.log("Webhook is valid!");

      let serverTime = Date.now();

      // if (req.body.alert_name === "payment_succeeded") {
      //For this one, I need to save all of this data to user document
      console.log("payment_succeeded");

      let data = {
        updatedAt: serverTime,
        paddleUserId: req.body.user_id,
        credits: credits,
      };

      saveToFirestore(data, req.body.passthrough)
        .then(() => {
          console.log("firebase func finished, now sending success status");
          res.status(200).json({ success: true });
        })
        .catch(() => {
          console.log(
            "firebase func finished, but failed. Sending failure status"
          );
          res.status(401).json({ error: "Something went wrong :(  " });
        });
      // } else {
      //   console.log("not payment_succeeded");
      //   res.status(200).json({ success: true });
      // }
    } else {
      console.log("Webhook is invalid!");
      res.status(401).json({ error: "Webhook is invalid!" });
    }
  }
}

const saveToFirestore = async (data, uid) => {
  let ref = adminDB.collection("users").doc(uid);
  // console.log(ref);
  // console.log(data);
  await ref
    .update(data)
    .then(() => {
      console.log("Document successfully written!!");
      // success = true
    })
    .catch((error) => {
      console.log(error);
      console.error("Error writing document: ", error);
      // console.error("UGH SOMETHING WENT WRONG");
      // success = false
    });
  // console.log("End of firebase function");

  // return success;
};
