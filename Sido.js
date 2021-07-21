import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard } from "react-native";
function Sido() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sido, setSido] = useState([]);
  return (
    <>
      <Text>시도</Text>

      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        onOpen={() => {
          // 선택창이 열릴때
          Keyboard.dismiss(); //키보드 내림
        }}
        items={[
          { label: "서울", value: "seoul" },
          { label: "경기", value: "gyeonggi" },
          { label: "인천", value: "incheon" },
          { label: "부산", value: "busan" },
          { label: "광주", value: "gwangju" },
          { label: "울산", value: "ulsan" },
          { label: "강원", value: "gangwon" },
          { label: "제주", value: "jeju" },
          { label: "세종", value: "sejong" },
          { label: "대전", value: "daejeon" },
          { label: "대구", value: "daegu" },
          { label: "충청북도", value: "choongbuk" },
          { label: "충청남도", value: "choongnam" },
          { label: "전라북도", value: "jeonbuk" },
          { label: "전라남도", value: "jeonnam" },
          { label: "경상북도", value: "geongbuk" },
          { label: "경상남도", value: "geongnam" },
        ]}
        style={{ height: 30 }}
      />
    </>
  );
}

export default Sido;
