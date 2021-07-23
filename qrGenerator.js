import React, { Component } from "react";
import QRCode from "react-native-qrcode-svg";
class qrGenerator extends Component {
  render() {
    return (
      <>
        <QRCode
          size={200} // 로고 사이즈 조절
          value="hyejina" // 실제 연결 될 주소
          logoSize={300}
          logoBackgroundColor="transparent"
        />
      </>
    );
  }
}

export default qrGenerator;
