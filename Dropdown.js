import React, { useState } from "react";
import { Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard } from "react-native";
function Dropdown() {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const [Sido, setSido] = useState([]);
  const [Seoul, setSeoul] = useState([]);
  const [Gyeonggi, setGyeonggi] = useState([]);
  const SidoArr = [
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
  const SeoulArr = [
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
  const GyeonggiArr = [
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
  const IncheonArr = [
    { label: "동구", value: "dong"},
    { label: "미추홀구", value: "michuhol"},
    { label: "연수구", value: "yeonsoo"},
    { label: "남동구", value: "namdong"},
    { label: "부평구", value: "boopyeong"},
    { label: "계양구", value: "gyeyang"},
    { label: "서구", value: "seo"},
    { label: "강화군", value: "ganhwa"},
    { label: "옹진군", value: "ongjin"},    
  ];
  const BoosanArr = [
    { label: "중구", value: "joong"},
    { label: "서구", value: "seo"},
    { label: "동구", value: "dong"},
    { label: "영도구", value: "youngdo"},
    { label: "부산진구", value: "boosanjin"},
    { label: "동래구", value: "dongrae"},
    { label: "남구", value: "nam"},
    { label: "북구", value: "book"},
    { label: "해운대구", value: "haewoondae"},
    { label: "사하구", value: "saha"},
    { label: "금정구", value: "geumjeong"},
    { label: "강서구", value: "kangseo"},
    { label: "연제구", value: "yeonjae"},
    { label: "수영구", value: "sooyoung"},
    { label: "사상구", value: "sasang"},
    { label: "기장군", value: "kijang"},
  ];
  const GwangjooArr = [
    { label: "광산구", value: "gwangsan"},
    { label: "동구", value: "dong"},
    { label: "서구", value: "seo"},
    { label: "남구", value: "nam"},
    { label: "북구", value: "book"},
  ];
  const UlsanArr = [
    { label: "중구", value: "joong"},
    { label: "남구", value: "nam"},
    { label: "동구", value: "dong"},
    { label: "북구", value: "book"},
    { label: "울주구", value: "ulzoo"},
  ];
  const GangwonArr = [
    { label: "춘천시", value: "chooncheon"},
    { label: "원주시", value: "wonjoo"},
    { label: "강릉시", value: "gangreung"},
    { label: "동해시", value: "donghae"},
    { label: "태백시", value: "taebaek"},
    { label: "속초시", value: "sokcho"},
    { label: "삼척시", value: "samcheok"},
    { label: "홍천군", value: "hongcheon"},
    { label: "횡성군", value: "hoengseong"},
    { label: "영월군", value: "yeongwol"},
    { label: "평창군", value: "pyeonchang"},
    { label: "정선군", value: "jeongseon"},
    { label: "철원군", value: "chulwon"},
    { label: "화천군", value: "hwacheon"},
    { label: "양구군", value: "yanggoo"},
    { label: "인제군", value: "injae"},
    { label: "고성군", value: "goseong"},
    { label: "양양군", value: "yangyang"},
  ];
  const JejuArr = [
    { label: "", value: ""},
    { label: "", value: ""},
    { label: "", value: ""},
    { label: "", value: ""},
    { label: "", value: ""},
    { label: "", value: ""},
    { label: "", value: ""},

  ];

  const placeholderText = "선택하세요";
  return (
    <>
      <Text>시/도</Text>
      <RNPickerSelect
        placeholder={{ label: placeholderText }}
        onValueChange={(Sido) => setSido(Sido)}
        items={SidoArr}
        onOpen={() => {
          Keyboard.dismiss();
        }}
      />
      {console.log("sido", Sido)}
      {Sido === "seoul" ? (
        <>
          <Text>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Seoul) => setSeoul(Seoul)}
            items={SeoulArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
          />
        </>
      ) : Sido === "gyeonggi" ? (
        <>
          <Text>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Gyeonggi) => setGyeonggi(Gyeonggi)}
            items={GyeonggiArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
          />
        </>
      ) : (
        console.log("not seoul, not gyeonggi")
      )}
      {/* {console.log("sigungu", Seoul)} {console.log("sigungu", Gyeonggi)} */}
    </>
  );
}

export default Dropdown;
