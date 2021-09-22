import React, { Component, useState } from "react";
import QRCode from "react-native-qrcode-svg";
import axios from "axios";
function qrGenerator() {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [date, setDate] = useState(0);
  // const [longitd, setLongitd] = useState(0);
  // const [latitd, setLatitd] = useState(0);
  axios
    .get("https://www.ttockclinic.com/v1/paper")
    .then((res) => {
      console.log(res);
      console.log("here");
    });
  return (
    <>
      <QRCode
        size={200} // 로고 사이즈 조절
        value={["1", "2", "3", "4", "hyejin", "5"]} // paper_id, clinic_id
        logoSize={300}
        logoBackgroundColor="transparent"
      />
    </>
  );
}

export default qrGenerator;
