import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import constants from "./constants";
import axios from "axios";
import { Header, Card, ListItem, Avatar } from "react-native-elements";
import { Dimensions } from "react-native";

var clinicNameArr = [];

const clinicInfo = ({ navigation, route }) => {
  const [clinicNm, setClinicNm] = useState("");
  const [infoArr, setInforArr] = useState([]);
  const [msg, setMsg] = useState("");
  console.log(route.params.sd, route.params.sgg);
  useEffect(() => {
    axios
      .get("https://www.ttockclinic.com/v1/clinics", {
        params: {
          addr1: `${route.params.sd}`,
          addr2: `${route.params.sgg}`,
        },
      })
      .then((response) => {
        console.log(response);
        const dataList = response.data;
        console.log(dataList);
        if (dataList.length === 0) {
          setMsg("해당 지역에 선별 진료소가 없습니다.");
        } else {
          dataList.map((name, i) => {
            clinicNameArr.push(
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ClinicNext", {
                    id: name.id,
                  });
                }}
                style={styles.touch}
              >
                <ListItem containerStyle={styles.listItem}>
                  <ListItem.Content
                    style={{ borderWidth: 2, borderColor: "#00462a" }}
                  >
                    {/* <Avatar source={{ uri: name.name }} /> */}
                    <ListItem.Title style={styles.listTitle}>
                      {name.name}&nbsp;
                    </ListItem.Title>
                    <ListItem.Subtitle style={styles.listSub}>
                      {name.address}
                    </ListItem.Subtitle>
                    <ListItem.Subtitle style={styles.listSub2}>
                      대기 인원 : {name.waitings} 명
                    </ListItem.Subtitle>
                    {/* </View> */}
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
            );
          });

          setClinicNm(clinicNameArr);
        }
      });
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
            <Icon name="chevron-forward-circle-outline" size={30}></Icon>{" "}
            선별진료소 정보
          </Card.Title>
          <Text style={styles.mainDescription}>
            선택한 지역의 선별진료소의 정보입니다.
            {"\n"}자세한 정보를 보려면 선별진료소를 선택하세요.
          </Text>
        </View>
        <View style={styles.container2}>
          <ScrollView>
            <Text style={{ alignContent: "center" }}>{clinicNm}</Text>
          </ScrollView>
        </View>
        <View style={styles.container3}></View>
      </View>
    </View>
  );
};
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
    margin: "5%",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  container1: {
    flex: 0.15,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 0.8,
    borderColor: "black",
    borderRadius: 2,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
  container3: {
    flex: 0.05,
    alignItems: "center",
    width: "100%",
  },
  touch: {
    width: constants.width * 0.99,
    paddingLeft: "-5%",
    paddingRight: "2%",
  },
  listContent: {
    marginTop: "-7%",
    flexDirection: "column",
    width: "100%",
  },
  listItem: {
    width: "100%",
    alignContent: "center",
    marginLeft: "-4%",
  },
  listTitle: {
    color: "white",
    lineHeight: 30,
    width: "100%",
    paddingLeft: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#00462a",
    backgroundColor: "#00462a",
  },
  listSub: {
    lineHeight: 20,
    width: "100%",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "4%",
    fontSize: 18,
    borderRadius: 4,
  },
  listSub2: {
    lineHeight: 20,
    width: "100%",
    paddingLeft: "4%",
    paddingTop: "2%",
    paddingBottom: "2%",
    fontSize: 18,
    borderRadius: 4,
  },
  noResult: {
    fontSize: 25,
    color: "#00462a",
    fontWeight: "bold",
    // marginTop: "20%",
    textAlign: "center",
  },
  scroll: {
    width: "103%",
  },
  card: {
    // marginLeft: "-5%",
    // marginRight: "-5%",
    marginTop: "5%",
    paddingTop: "5%",
    paddingBottom: "5%",
    alignItems: "center",
    shadowColor: "rgba(0,0,0, 0.0)", //ios 그림자 없애기
    elevation: 0, //안드로이드 그림자 없애기
    // borderColor: "#00462a",
    // borderWidth: 2,
    // justifyContent: "center",
    // borderRadius: 10,
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
  },
});
export default clinicInfo;
