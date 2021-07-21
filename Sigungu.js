import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Text } from "react-native";
import Sido from "./Sido";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard } from "react-native";
const Sigungu = ({ items }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [sigungu, setSigungu] = useState([]);
  console.log({ items });
  return (
    <>
      <Text>시군구</Text>
      <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        onOpen={() => {
          // 선택창이 열릴때
          Keyboard.dismiss(); //키보드 내림
        }}
        items={[
          { label: "강남구", value: "gangnam" },
          { label: "강동구", value: "gangdong" },
          { label: "강북구", value: "gangbuk" },
          { label: "강서구", value: "gangseo" },
          { label: "관악구", value: "gwanak" },
          { label: "광진구", value: "gwangjin" },
          { label: "구로구", value: "guro" },
          { label: "금천구", value: "geumcheon" },
          { label: "노원구", value: "nowon" },
          { label: "도봉구", value: "dobong" },
          { label: "동대문구", value: "dongdaemun" },
          { label: "동작구", value: "dongjak" },
          { label: "마포구", value: "mapo" },
          { label: "서대문구", value: "seodaemun" },
          { label: "서초구", value: "seocho" },
          { label: "성동구", value: "seongdong" },
          { label: "성북구", value: "seongbuk" },
          { label: "송파구", value: "songpa" },
          { label: "양천구", value: "yangcheon" },
          { label: "영등포구", value: "yeondeungpo" },
          { label: "용산구", value: "yongsan" },
          { label: "은평구", value: "eunpyeong" },
          { label: "종로구", value: "jongno" },
          { label: "중구", value: "joongu" },
          { label: "중랑구", value: "joonglang" },
        ]}
      />
    </>
  );
};

export default Sigungu;
