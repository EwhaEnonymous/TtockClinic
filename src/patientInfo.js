import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
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
                  <Text style={{ alignItems: "center" }}>격리해제</Text>
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
              <Text style={styles.count2text3}>▲ {examCnt - examCnt2} 명</Text>
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
        </View>
      </View>
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
});
export default patientInfo;
