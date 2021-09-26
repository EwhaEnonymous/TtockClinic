import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import "react-native-gesture-handler";
import constants from "./constants";
import { Header, Card } from "react-native-elements";
import axios from "axios";
const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;
import Icon3 from "react-native-vector-icons/Ionicons";

function patientInfo({ navigation }) {
  const [decideCnt, setDecideCnt] = useState(0);
  const [clearCnt, setClearCnt] = useState(0);
  const [examCnt, setExamCnt] = useState(0);
  const [deathCnt, setDeathCnt] = useState(0);
  const [stateMt, setStateMt] = useState(0);
  const [stateDt, setStateDt] = useState(0);

  const [decideCnt2, setDecideCnt2] = useState(0);
  const [clearCnt2, setClearCnt2] = useState(0);
  const [examCnt2, setExamCnt2] = useState(0);
  const [deathCnt2, setDeathCnt2] = useState(0);

  axios.get("https://www.ttockclinic.com/v1/covid-url").then((response) => {
    const connect = response.data.response.body.items.item;
    setDecideCnt(connect[0].decideCnt);
    setClearCnt(connect[0].clearCnt);
    setExamCnt(connect[0].examCnt);
    setDeathCnt(connect[0].deathCnt);
    setStateMt(parseInt((connect[0].stateDt % 10000) / 100));
    setStateDt(connect[0].stateDt % 100);
    setDecideCnt2(connect[1].decideCnt);
    setClearCnt2(connect[1].clearCnt);
    setExamCnt2(connect[1].examCnt);
    setDeathCnt2(connect[1].deathCnt);
  });
  return (
    <View style={styles.body}>
      {/* Header Bar */}
      <Header
        placement="left"
        centerComponent={
          <TouchableOpacity>
            <Text
              style={styles.headerText}
              onPress={() => navigation.navigate("Main")}
            >
              💉똑똑 선별진료소💉
            </Text>
          </TouchableOpacity>
        }
        placement="center"
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate("qrCheck")}>
            <Text style={styles.menuText}>My</Text>
          </TouchableOpacity>
        }
        backgroundColor={"#00462a"}
      ></Header>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container1}>
            <Card.Title style={styles.title}>
              <Icon3 name="chevron-forward-circle-outline" size={30}></Icon3>{" "}
              오늘의 현황
            </Card.Title>
            <Text style={styles.mainDescription}>
              오늘의 코로나 확진자수를 한눈에 알아보세요
            </Text>
          </View>
          {/* 내용 */}
          <View style={styles.container2}>
            <View style={styles.dateBox}>
              <Card.Title style={styles.date}>
                <Text>
                  {stateMt}월 {stateDt}일
                </Text>
              </Card.Title>
            </View>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardView}>
                <View>
                  <Card.Title style={styles.cardDescription}>
                    <Text style={{ alignItems: "center" }}>확진 환자 수</Text>
                  </Card.Title>
                </View>

                <View style={styles.count1}>
                  <Text style={styles.count1text}>{decideCnt} 명</Text>
                </View>
              </View>
              <View style={styles.count2}>
                <Text style={styles.count2text1}>
                  ▲ {decideCnt - decideCnt2} 명
                </Text>
              </View>
            </Card>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardView}>
                <View>
                  <Card.Title style={styles.cardDescription}>
                    <Text style={{ alignItems: "center" }}>격리 해제</Text>
                  </Card.Title>
                </View>

                <View style={styles.count1}>
                  <Text style={styles.count1text}>{clearCnt} 명</Text>
                </View>
              </View>
              <View style={styles.count2}>
                <Text style={styles.count2text2}>
                  ▲ {clearCnt - clearCnt2} 명
                </Text>
              </View>
            </Card>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardView}>
                <View>
                  <Card.Title style={styles.cardDescription}>
                    <Text style={{ alignItems: "center" }}>검사 진행</Text>
                  </Card.Title>
                </View>

                <View style={styles.count1}>
                  <Text style={styles.count1text}>{examCnt} 명</Text>
                </View>
              </View>
              <View style={styles.count2}>
                <Text style={styles.count2text3}>
                  ▲ {examCnt - examCnt2} 명
                </Text>
              </View>
            </Card>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardView}>
                <View>
                  <Card.Title style={styles.cardDescription}>
                    <Text style={{ alignItems: "center" }}>사망자 수</Text>
                  </Card.Title>
                </View>

                <View style={styles.count1}>
                  <Text style={styles.count1text}>{deathCnt} 명</Text>
                </View>
              </View>
              <View style={styles.count2}>
                <Text style={styles.count2text4}>
                  ▲ {deathCnt - deathCnt2} 명
                </Text>
              </View>
            </Card>
            <View style={styles.container}>
              <View style={styles.container1}>
                <Card.Title style={styles.title}>
                  <Icon3
                    name="chevron-forward-circle-outline"
                    size={30}
                  ></Icon3>{" "}
                  거리두기 현황
                </Card.Title>
                <Text style={styles.mainDescription}>
                  지역별 거리두기 현황을 알아보세요
                </Text>
              </View>
              <View style={styles.container3}>
                <Text styles={{ width: "100%" }}>
                  <Card.Title style={styles.distance1}>전국</Card.Title>
                </Text>
                <Text styles={{ width: "100%" }}>
                  <Card.Title style={styles.distance2}>4단계</Card.Title>
                  <Text>- 수도권 3개 (서울, 인천, 경기)</Text>
                  <Card.Title style={styles.distance3}>3단계</Card.Title>
                  <Text style={styles.subtitle}>수도권{"\n"}</Text>
                  <Text>강화군, 옹진군</Text>
                  <Text style={styles.subtitle}>충청권{"\n"}</Text>
                  <Text>세종, 충북, 충남, 대전</Text>
                  <Text style={styles.subtitle}>호남권{"\n"}</Text>
                  <Text>광주, 전북, 전남</Text>
                  <Text style={styles.subtitle}>경북권{"\n"}</Text>
                  <Text>대구, 경북</Text>
                  <Text style={styles.subtitle}>경남권{"\n"}</Text>
                  <Text>울산, 부산, 경남</Text>
                  <Text style={styles.subtitle}>강원{"\n"}</Text>
                  <Text style={styles.subtitle}>수도권{"\n"}</Text>
                  <Text>춘천시, 원주시, 동해시, 강릉시, 속초시, 인제군</Text>
                  <Text style={styles.subtitle}>제주{"\n"}</Text>
                  <Text>제주</Text>
                  <Text></Text>
                  <Card.Title style={styles.distance4}>2단계</Card.Title>
                  <Text>
                    - 호남권 11개 (정읍시, 남원시, 김제시, 완주군(혁신도시
                    갈산리 제외), 진안군, 무주군, 장수군, 임실군, 순창군,
                    고창군, 부안군) - 경북권 2개 (문경, 상주시) - 강원 12개
                    (태백시, 삼척시, 홍천군, 횡성군, 영월군, 평창군, 정선군,
                    철원군, 화천군, 양구군, 고성군, 양양군)
                  </Text>
                  <Card.Title style={styles.distance5}>1단계</Card.Title>
                  <Text>
                    - 경북권 12개 (군위군, 의성군, 청송군, 영양군, 영덕군,
                    청도군, 고령군, 성주군, 예천군, 봉화군, 울릉군, 울진군)
                  </Text>
                </Text>
              </View>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "http://ncov.mohw.go.kr/regSocdisBoardView.do?brdId=6&brdGubun=68&ncvContSeq=495"
                  )
                }
              ></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    color: "#fff",
    letterSpacing: 3,
    fontWeight: "bold",
    fontSize: 20,
  },
  menuText: {
    color: "#fff",
    fontSize: 20,
    marginRight: "5%",
  },
  container: {
    flex: 1,
    marginTop: "8%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
  },
  container1: {
    flex: 0.2,
    alignItems: "flex-start",
  },
  container2: {
    flex: 1.5,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
  },
  dateBox: {
    borderColor: "#00462a",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "4%",
    borderWidth: 2,
    borderRadius: 10,
  },
  date: {
    fontSize: 30,
    width: "100%",
    alignItems: "flex-start",
    borderColor: "#fff",
    color: "#00462a",
    justifyContent: "flex-start",
  },
  cardContainer: {
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "lightgray",
  },
  cardDescription: {
    fontSize: 25,
    textAlign: "left",
  },
  cardView: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  count1: {
    textAlign: "left",
    marginTop: "0.8%",
    display: "flex",
  },
  count2: {
    alignItems: "flex-end",
  },
  count1text: {
    fontSize: 23,
    color: "red",
  },
  count2text1: {
    fontSize: 30,
    color: "white",
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "red",
  },
  count2text2: {
    fontSize: 30,
    color: "white",
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "blue",
  },
  count2text3: {
    fontSize: 30,
    color: "white",
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "green",
  },
  count2text4: {
    fontSize: 30,
    color: "white",
    paddingLeft: "4%",
    paddingRight: "4%",
    backgroundColor: "black",
  },
  container3: {
    flex: 0.2,
    // alignItems: "flex-start",

    marginTop: "2%",
    marginBottom: "2%",
  },
  distance1: {
    alignItems: "flex-start",
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
    textAlign: "left",
  },
  distance2: {
    fontSize: 30,
    color: "white",
    backgroundColor: "red",
    width: "100%",
    fontWeight: "bold",
    padding: 5,
    textAlign: "left",
  },
  distance3: {
    fontSize: 30,
    color: "white",
    backgroundColor: "orange",
    width: "100%",
    fontWeight: "bold",
    padding: 5,
    textAlign: "left",
  },
  distance4: {
    fontSize: 30,
    color: "white",
    backgroundColor: "yellow",
    width: "100%",
    fontWeight: "bold",
    padding: 5,
    textAlign: "left",
  },
  distance5: {
    fontSize: 30,
    color: "white",
    backgroundColor: "blue",
    width: "100%",
    fontWeight: "bold",
    padding: 5,
    textAlign: "left",
  },
});
export default patientInfo;
