import React, { Component } from "react";
import QRCode from "react-native-qrcode-svg";
import axios from "axios";
function qrGenerator() {
  axios.get("/v1/paper").then((res) => console.log(res));
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
