import React, { useState } from "react";
import { Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard } from "react-native";
function Dropdown() {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const [sido, setSido] = useState([]);
  const [seoul, setSeoul] = useState([]);
  const [gyeonggi, setGyeonggi] = useState([]);
  const sidoArr = [
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
  ]; //시도 data
  const seoulArr = [
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
  ]; //서울시 구 data
  const gyeonggiArr = [
    { label: "가평군", value: "gapyeong" },
    { label: "고양시", value: "goyang" },
    { label: "과천시", value: "gwacheon" },
    { label: "광명시", value: "gwangmeong" },
    { label: "광주시", value: "gwangju" },
    { label: "구리시", value: "goori" },
    { label: "군포시", value: "gunpo" },
    { label: "김포시", value: "gimpo" },
    { label: "남양주시", value: "namyangjoo" },
    { label: "동두천시", value: "dongducheon" },
    { label: "부천시", value: "bucheon" },
    { label: "성남시", value: "seongnam" },
    { label: "수원시", value: "suwon" },
    { label: "시흥시", value: "siheung" },
    { label: "안산시", value: "ansan" },
    { label: "안성시", value: "anseong" },
    { label: "안양시", value: "seongbuk" },
    { label: "양주시", value: "yangju" },
    { label: "양평군", value: "yangpyeong" },
    { label: "여주시", value: "yeoju" },
    { label: "연천군", value: "yeonchun" },
    { label: "오산시", value: "osan" },
    { label: "용인시", value: "yongin" },
    { label: "의왕시", value: "uiwang" },
    { label: "의정부시", value: "uijeongbu" },
    { label: "이천시", value: "yicheon" },
    { label: "파주시", value: "paju" },
    { label: "평택시", value: "pyeongtaek" },
    { label: "포천시", value: "pocheon" },
    { label: "하남시", value: "hanam" },
    { label: "화성시", value: "hwaseong" },
  ]; //경기도 시군구 data
  return (
    <div>
      <Text>시/도</Text>
      <RNPickerSelect
        onValueChange={(sido) => setSido(sido)}
        items={sidoArr}
        onOpen={() => {
          Keyboard.dismiss();
        }}
      />
      {console.log("sido", sido)}
      {sido === "seoul" ? (
        <div>
          <Text>시/군/구</Text>
          <RNPickerSelect
            onValueChange={(seoul) => setSeoul(seoul)}
            items={seoulArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
          />
        </div>
      ) : sido === "gyeonggi" ? (
        <div>
          <Text>시/군/구</Text>
          <RNPickerSelect
            onValueChange={(gyeonggi) => setGyeonggi(gyeonggi)}
            items={gyeonggiArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
          />
        </div>
      ) : (
        console.log("not seoul, not gyeonggi")
      )}
      {console.log("sigungu", seoul)} {console.log("sigungu", gyeonggi)}
    </div>
  );
}

export default Dropdown;
