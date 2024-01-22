import orders from "../model/orders.js"; // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getMessaging } from "firebase/messaging";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUoO_L8rnvsGHQKO47UyKkg_a1OazIczA",
  authDomain: "afiya-delight.firebaseapp.com",
  projectId: "afiya-delight",
  storageBucket: "afiya-delight.appspot.com",
  messagingSenderId: "387825120585",
  appId: "1:387825120585:web:a2f6560f834699d0f41698",
  measurementId: "G-F2RK8CJ59M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

export const createOrder = async (req, res, next) => {
  try {
    const { item, user_info } = req.body;

    const newOrder = {
      item,
      user_info,
    };

    const createOrder_cnt = await orders.create(newOrder);
    res.status(200).json({
      sucess: true,
      msg: "a new content is added",
    });
    try {
      const tokenHeaders = new Headers();
      tokenHeaders.append("Content-Type", "application/json");

      const token_reqs = {
        method: "GET",
        headers: tokenHeaders,
      };
      const res = await fetch("http://localhost:3001/getToken", token_reqs);
      const cityData = await res.json();
      console.log(cityData.tokens);

      try {
        const listHeaders = new Headers();
        listHeaders.append("Content-Type", "application/json");
        listHeaders.append(
          "Authorization",
          "key=AAAAWkwttUk:APA91bEccf9VRi664zjbFA_s9KL1113iHz0RgRs07Z3DBoSj6fcUUSpnA6j0VWCwSpS6rZtEL_o9tXDq2HoauxTFYHctN7jjoOUW09l7-masLsGbJtzn7SntkxOkJjrG1C_HLqWO0DhP"
        );
        const data = {
          to: cityData.tokens[cityData.tokens.length - 1].token_name,
          notification: { title: "New order", body: "u got a new order" },
        };
        const list_reqs = {
          method: "POST",
          headers: listHeaders,
          body: JSON.stringify(data),
        };
        const res = await fetch(
          "https://fcm.googleapis.com/fcm/send",
          list_reqs
        );
        const city = await res.json();
        console.log(city);

        // Send a message to the device corresponding to the provided
        // registration token.
      } catch (err) {
        console.log(err);
      }

      // Send a message to the device corresponding to the provided
      // registration token.
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);

    res.status(400).json({
      sucess: false,
      msg: "error occured",
    });
  }
};
export const getOrder = async (req, res, next) => {
  const order = await orders.find();
  res.status(200).json({
    sucess: true,
    order,
    totalLength: order.length,
  });
};
export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.body;
    const del_order = await orders.findOne({ _id: id });

    if (!del_order) {
      console.log(id);
      next("No job found");
    }
    await del_order.deleteOne({ _id: id });
    res.status(200).json({
      message: "sucessfully deleted",
    });
  } catch (e) {
    next(e);
  }
};
export const getoneOrder = async (req, res, next) => {
  const { id } = req.body;
  const order = await orders.findOne({ _id: id });
  res.status(200).json({
    sucess: true,
    order,
  });
};
// export const updateItems = async (req, res, next) => {
//   try {
//     const { item, user_info } = req.body;

//     const items = await item.findOne({ _id: id });
//     if (!items) {
//       next(`no job found with id ${id}`);
//     }
//     if (isCheck == false) {
//       const updateitem = await item.findOneAndUpdate(

//       );
//       res.status(200).json({
//         updateitem,
//       });
//     } else {
//       const updateitem = await item.findOneAndUpdate(
//         { _id: id },
//         {
//           name: name,
//           slug: slug,
//           images: images,
//           thumbnail: thumbnail,
//           categories: categories,
//           types: types,
//           isCheck: isCheck,

//           varient: varient,
//         }
//       );
//       res.status(200).json({
//         updateitem,
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// };
