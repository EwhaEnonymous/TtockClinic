import React, { Component } from "react";
import QRCode from "react-native-qrcode-svg";
<<<<<<< HEAD
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
=======
class qrGenerator extends Component {
  render() {
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
>>>>>>> f4b910533865a21e379f163fcaa519e8a945eec4
}

export default qrGenerator;
