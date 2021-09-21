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
// const patientInfo = ({ navigation }) => {
// axios
//   .get("v1/covid-url")
//   .then((response) => console.log(response.data))
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

function patientInfo({ navigation }) {
  const [decideCnt, setDecideCnt] = useState(0);
  const [clearCnt, setClearCnt] = useState(0);
  const [examCnt, setExamCnt] = useState(0);
  const [deathCnt, setDeathCnt] = useState(0);
  const [stateMt, setStateMt] = useState(0);
  const [stateDt, setStateDt] = useState(0);
  //  const [careCnt, setCareCnt] = useState(0);
  //  const [accExamCnt, setAccExamCnt] = useState(0);
  //  const [accExamCompCnt, setAccExamCompCnt] = useState(0);
  //  const [accDefRate, setAccDefRate] = useState(0);
  const [decideCnt2, setDecideCnt2] = useState(0);
  const [clearCnt2, setClearCnt2] = useState(0);
  const [examCnt2, setExamCnt2] = useState(0);
  const [deathCnt2, setDeathCnt2] = useState(0);

  axios.get("https://www.ttockclinic.com/v1/covid-url").then((response) => {
    // console.log(response.data.response.body.items.item);
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
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={
          <TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                letterSpacing: 3,
                fontWeight: "bold",
                fontSize: 20,
              }}
              onPress={() => navigation.navigate("Main")}
            >
              💉똑똑 선별진료소💉
            </Text>
          </TouchableOpacity>
        }
        placement="center"
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor={"#00462a"}
      ></Header>
      <View style={styles.container2}>
        <View style={styles.up0}>
          <Text style={styles.up0text}>Covid-19 감염 현황</Text>
          <Text style={styles.up1text}>
            {stateMt}.{stateDt} 신규합계 +{decideCnt - decideCnt2}
          </Text>
        </View>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardView}>
            <Text style={styles.boxtext1}>확진환자</Text>
            <Card.Title style={styles.cardTitle}>
              ▲{decideCnt - decideCnt2}
            </Card.Title>
          </View>
          <Card.Divider />
          <Text style={styles.cardDescription}>
            누적 확진환자 수: {decideCnt}
          </Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardView}>
            <Text style={styles.boxtext1}>격리해제</Text>
            <Card.Title style={styles.cardTitle}>
              ▲{clearCnt - clearCnt2}
            </Card.Title>
          </View>
          <Card.Divider />
          <Text style={styles.cardDescription}>
            누적 격리해제 수: {clearCnt}
          </Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardView}>
            <Text style={styles.boxtext1}>검사진행</Text>
            <Card.Title style={styles.cardTitle}>
              ▲{examCnt - examCnt2}
            </Card.Title>
          </View>
          <Card.Divider />
          <Text style={styles.cardDescription}>
            누적 검사진행 수: {examCnt}
          </Text>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardView}>
            <Text style={styles.boxtext1}>사망자</Text>
            <Card.Title style={styles.cardTitle}>
              ▲{deathCnt - deathCnt2}
            </Card.Title>
          </View>
          <Card.Divider />
          <Text style={styles.cardDescription}>누적 사망자 수: {deathCnt}</Text>
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    backgroundColor: "#00462a",
    alignItems: "center",
    marginTop: 0,
    height: 5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  up0: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  up0text: {
    fontSize: constants.width > 370 ? 30 : 18,
    color: "black",
    fontWeight: "bold",
  },
  up1text: {
    fontSize: constants.width > 370 ? 20 : 15,
    color: "black",
    fontWeight: "bold",
  },
  container3: {
    flex: 1,
    width: "96%",
    alignItems: "center",
  },
  container4: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-start",
    // backgroundColor: "darkblue",
  },
  text: {
    color: "black",
    fontSize: constants.width > 370 ? 15 : 9,
  },
  btn: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "black",
    padding: 5,
  },
  container5: {
    flex: 3.5,
    width: "96%",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  graph: {
    fontSize: constants.width > 370 ? 30 : 18,
    fontWeight: "900",
  },
  footer: {
    flex: 0.7,
    color: "white",
    fontSize: constants.width > 370 ? 30 : 25,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
  boxtext1: {
    fontSize: 23,
    fontWeight: "bold",
    paddingTop: 5,
    marginBottom: 5,
  },
  cardContainer: {
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 20,
    width: screenwidth - 25,
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: screenwidth > 365 ? 30 : 20,
    paddingTop: 8,
    marginRight: 10,
    color: "crimson",
  },
  cardDescription: {
    fontSize: screenwidth > 365 ? 20 : 15,
    textAlign: "center",
  },
});
export default patientInfo;
