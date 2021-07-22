import React, { useState } from "react";
import { Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard, StyleSheet } from "react-native";
import constants from "./constants";

function Dropdown() {
  const [init, setInit] = useState(null);
  const [Sido, setSido] = useState([]);
  const [Seoul, setSeoul] = useState([]);
  const [Gyeonggi, setGyeonggi] = useState([]);
  const [Incheon, setIncheon] = useState([]);
  const [Busan, setBusan] = useState([]);
  const [Gwangju, setGwangju] = useState([]);
  const [Ulsan, setUlsan] = useState([]);
  const [Gangwon, setGangwon] = useState([]);
  const [Jeju, setJeju] = useState([]);
  const [Daejeon, setDaejeon] = useState([]);
  const [Daegu, setDaegu] = useState([]);
  const [Choongbuk, setChoongbuk] = useState([]);
  const [Choongnam, setChoongnam] = useState([]);
  const [Jeonbuk, setJeonbuk] = useState([]);
  const [Jeonnam, setJeonnam] = useState([]);
  const [Gyeongbuk, setGyeongbuk] = useState([]);
  const [Gyeongnam, setGyeongnam] = useState([]);
  const [Sejong, setSejong] = useState([]);

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
    { label: "경상북도", value: "gyeongbuk" },
    { label: "경상남도", value: "gyeongnam" },
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
    { label: "동구", value: "dong" },
    { label: "미추홀구", value: "michuhol" },
    { label: "연수구", value: "yeonsoo" },
    { label: "남동구", value: "namdong" },
    { label: "부평구", value: "boopyeong" },
    { label: "계양구", value: "gyeyang" },
    { label: "서구", value: "seo" },
    { label: "강화군", value: "ganhwa" },
    { label: "옹진군", value: "ongjin" },
  ];
  const BusanArr = [
    { label: "중구", value: "joong" },
    { label: "서구", value: "seo" },
    { label: "동구", value: "dong" },
    { label: "영도구", value: "youngdo" },
    { label: "부산진구", value: "boosanjin" },
    { label: "동래구", value: "dongrae" },
    { label: "남구", value: "nam" },
    { label: "북구", value: "book" },
    { label: "해운대구", value: "haewoondae" },
    { label: "사하구", value: "saha" },
    { label: "금정구", value: "geumjeong" },
    { label: "강서구", value: "kangseo" },
    { label: "연제구", value: "yeonjae" },
    { label: "수영구", value: "sooyoung" },
    { label: "사상구", value: "sasang" },
    { label: "기장군", value: "kijang" },
  ];
  const GwangjuArr = [
    { label: "광산구", value: "gwangsan" },
    { label: "동구", value: "dong" },
    { label: "서구", value: "seo" },
    { label: "남구", value: "nam" },
    { label: "북구", value: "book" },
  ];
  const UlsanArr = [
    { label: "중구", value: "joong" },
    { label: "남구", value: "nam" },
    { label: "동구", value: "dong" },
    { label: "북구", value: "book" },
    { label: "울주구", value: "ulzoo" },
  ];
  const GangwonArr = [
    { label: "춘천시", value: "chooncheon" },
    { label: "원주시", value: "wonjoo" },
    { label: "강릉시", value: "gangreung" },
    { label: "동해시", value: "donghae" },
    { label: "태백시", value: "taebaek" },
    { label: "속초시", value: "sokcho" },
    { label: "삼척시", value: "samcheok" },
    { label: "홍천군", value: "hongcheon" },
    { label: "횡성군", value: "hoengseong" },
    { label: "영월군", value: "yeongwol" },
    { label: "평창군", value: "pyeonchang" },
    { label: "정선군", value: "jeongseon" },
    { label: "철원군", value: "chulwon" },
    { label: "화천군", value: "hwacheon" },
    { label: "양구군", value: "yanggoo" },
    { label: "인제군", value: "injae" },
    { label: "고성군", value: "goseong" },
    { label: "양양군", value: "yangyang" },
  ];
  const JejuArr = [
    { label: "제주시", value: "jeju" },
    { label: "서귀포시", value: "seogwipo" },
  ];
  // const SejongArr = [];
  const DaejeonArr = [
    { label: "동구", value: "dong" },
    { label: "중구", value: "joong" },
    { label: "서구", value: "seo" },
    { label: "유성구", value: "yuseong" },
    { label: "대덕구", value: "daedeok" },
  ];
  const DaeguArr = [
    { label: "북구", value: "book" },
    { label: "동구", value: "dong" },
    { label: "서구", value: "seo" },
    { label: "남구", value: "nam" },
    { label: "중구", value: "joong" },
    { label: "수성구", value: "sooseong" },
    { label: "달서구", value: "dalseo" },
    { label: "달성군", value: "dalseong" },
  ];
  const ChoongbukArr = [
    { label: "청주시", value: "cheonju" },
    { label: "충주시", value: "choongju" },
    { label: "제천시", value: "jaecheon" },
    { label: "보은군", value: "boeun" },
    { label: "옥천군", value: "okcheon" },
    { label: "영동군", value: "yeongdong" },
    { label: "증평군", value: "jeungpyeong" },
    { label: "진천군", value: "jincheon" },
    { label: "괴산군", value: "gwaesan" },
    { label: "음성군", value: "eumseong" },
    { label: "단양군", value: "danyang" },
  ];
  const ChoongnamArr = [
    { label: "천안시", value: "cheonan" },
    { label: "공주시", value: "gongju" },
    { label: "보령시", value: "boryeong" },
    { label: "아산시", value: "asan" },
    { label: "서산시", value: "seosan" },
    { label: "논산시", value: "nonsan" },
    { label: "계룡시", value: "gyeryong" },
    { label: "당진시", value: "dangjin" },
    { label: "금산군", value: "geumsan" },
    { label: "부여군", value: "booyeo" },
    { label: "서천군", value: "seocheon" },
    { label: "청양군", value: "chungyang" },
    { label: "홍성군", value: "hongsung" },
    { label: "예산군", value: "yesan" },
    { label: "태안군", value: "taean" },
  ];
  const JeonbukArr = [
    { label: "전주시", value: "jeonju" },
    { label: "군산시", value: "gunsan" },
    { label: "익산시", value: "iksan" },
    { label: "정읍시", value: "jeongeup" },
    { label: "남원시", value: "namwon" },
    { label: "김제시", value: "gimjae" },
    { label: "완주군", value: "wanju" },
    { label: "진안군", value: "jinan" },
    { label: "무주군", value: "muju" },
    { label: "장수군", value: "jangsu" },
    { label: "임실군", value: "imsil" },
    { label: "순창군", value: "soonchang" },
    { label: "고창군", value: "gochang" },
    { label: "부안군", value: "booan" },
  ];
  const JeonnamArr = [
    { label: "목포시", value: "mokpo" },
    { label: "여수시", value: "yeosoo" },
    { label: "순천시", value: "sooncheon" },
    { label: "나주시", value: "najoo" },
    { label: "광양시", value: "gwangyang" },
    { label: "담양군", value: "damyang" },
    { label: "곡성군", value: "gokseong" },
    { label: "구례군", value: "goorye" },
    { label: "고흥군", value: "goheung" },
    { label: "보성군", value: "boseong" },
    { label: "화순군", value: "hwasoon" },
    { label: "장흥군", value: "jangheung" },
    { label: "강진군", value: "kangjin" },
    { label: "해남군", value: "haenam" },
    { label: "영암군", value: "youngam" },
    { label: "무안군", value: "mooan" },
    { label: "함평군", value: "hampyeong" },
    { label: "영광군", value: "younggwang" },
    { label: "장성군", value: "jangseong" },
    { label: "완도군", value: "wando" },
    { label: "진도군", value: "jindo" },
    { label: "신안군", value: "sinan" },
  ];
  const GyeongbukArr = [
    { label: "포항시", value: "pohang" },
    { label: "경주시", value: "gyeongju" },
    { label: "김천시", value: "gimcheon" },
    { label: "안동시", value: "andong" },
    { label: "구미시", value: "gumi" },
    { label: "영주시", value: "youngju" },
    { label: "영천시", value: "youngcheon" },
    { label: "상주시", value: "sangju" },
    { label: "문경시", value: "moonkyung" },
    { label: "경산시", value: "gyeongsan" },
    { label: "군위군", value: "goonwi" },
    { label: "의성군", value: "euiseong" },
    { label: "청송군", value: "cheongsong" },
    { label: "영양군", value: "youngyang" },
    { label: "영덕군", value: "youngduk" },
    { label: "청도군", value: "cheongdo" },
    { label: "고령군", value: "goryeong" },
    { label: "성주군", value: "seongju" },
    { label: "칠곡군", value: "chilgok" },
    { label: "예천군", value: "yecheon" },
    { label: "봉화군", value: "bonhwa" },
    { label: "울진군", value: "uljin" },
    { label: "울릉군", value: "ulleung" },
  ];
  const GyeongnamArr = [
    { label: "창원시", value: "changwon" },
    { label: "김해시", value: "gimhae" },
    { label: "진주시", value: "jinju" },
    { label: "양산시", value: "yangsan" },
    { label: "거제시", value: "geojae" },
    { label: "통영시", value: "tongyeong" },
    { label: "사천시", value: "sacheon" },
    { label: "밀양시", value: "milyang" },
    { label: "함안군", value: "haman" },
    { label: "거창군", value: "geochang" },
    { label: "창녕군", value: "changnyeong" },
    { label: "고성군", value: "gosung" },
    { label: "하동군", value: "hadong" },
    { label: "합천군", value: "hapcheon" },
    { label: "남해군", value: "namhae" },
    { label: "함양군", value: "hamyang" },
    { label: "산청군", value: "sancheong" },
    { label: "의령군", value: "euiryeong" },
  ];

  const placeholderText = "선택하세요";
  return (
    <>
      <Text style={styles.title}>시/도</Text>
      <RNPickerSelect
        placeholder={{ label: placeholderText }}
        onValueChange={(Sido) => setSido(Sido)}
        items={SidoArr}
        onOpen={() => {
          Keyboard.dismiss();
        }}
        style={pickerStyle}
      />
      {console.log("sido", Sido)}
      {Sido === "seoul" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Seoul) => setSeoul(Seoul)}
            items={SeoulArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "gyeonggi" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Gyeonggi) => setGyeonggi(Gyeonggi)}
            items={GyeonggiArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "incheon" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Incheon) => setIncheon(Incheon)}
            items={IncheonArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "busan" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Busan) => setBusan(Busan)}
            items={BusanArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "gwangju" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Gwangju) => setGwangju(Gwangju)}
            items={GwangjuArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "ulsan" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Ulsan) => setUlsan(Ulsan)}
            items={UlsanArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "gangwon" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Gangwon) => setGangwon(Gangwon)}
            items={GangwonArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "jeju" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Jeju) => setJeju(Jeju)}
            items={JejuArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "daejeon" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Daejeon) => setDaejeon(Daejeon)}
            items={DaejeonArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "daegu" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Daegu) => setDaegu(Daegu)}
            items={DaeguArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "choongbuk" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Choongbuk) => setChoongbuk(Choongbuk)}
            items={ChoongbukArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "choongnam" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Choongnam) => setChoongnam(Choongnam)}
            items={ChoongnamArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "jeonbuk" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Jeonbuk) => setJeonbuk(Jeonbuk)}
            items={JeonbukArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "jeonbuk" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Jeonbuk) => setJeonbuk(Jeonbuk)}
            items={JeonbukArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "jeonnam" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Jeonnam) => setJeonnam(Jeonnam)}
            items={JeonnamArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "gyeongbuk" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Gyeongbuk) => setGyeongbuk(Gyeongbuk)}
            items={GyeongbukArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "gyeongnam" ? (
        <>
          <Text style={styles.title}>시/군/구</Text>
          <RNPickerSelect
            placeholder={{ label: placeholderText }}
            onValueChange={(Gyeongnam) => setGyeongnam(Gyeongnam)}
            items={GyeongnamArr}
            onOpen={() => {
              Keyboard.dismiss();
            }}
            style={pickerStyle}
          />
        </>
      ) : Sido === "sejong" ? (
        console.log("sejong")
      ) : (
        console.log("none")
      )}
      {/* {console.log("sigungu", Seoul)} {console.log("sigungu", Gyeonggi)} */}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: constants.width > 370 ? 30 : 18,
    marginTop: "8%",
    fontWeight: "bold",
  },
});
const pickerStyle = {
  inputIOS: {
    height: 60,
    fontSize: constants.width > 370 ? 25 : 20,
    paddingLeft: 30,
    color: "black",
    borderColor: "#00462a",
    borderWidth: "1.5px",
    borderRadius: "5px",
    margin: 12,
  },
  inputAndroid: {
    height: 60,
    fontSize: constants.width > 370 ? 25 : 20,
    paddingLeft: 30,
    color: "black",
    borderColor: "#00462a",
    borderWidth: "1.5px",
    borderRadius: "5px",
    margin: 12,
  },
  placeholderColor: { color: "red" },
};

export default Dropdown;
