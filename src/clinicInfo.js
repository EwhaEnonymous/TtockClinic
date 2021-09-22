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
// import constants from "./constants";
import axios from "axios";
import constants from "./constants";
import { Header, Card, ListItem, Avatar } from "react-native-elements";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

var clinicNameArr = [];
var sidoNameArr = [];
var sgguNameArr = [];
const clinicInfo = ({ navigation }) => {
  const [clinicNm, setClinicNm] = useState("");
  const [sidoNm, setSidoNm] = useState("");
  const [sgguNm, setSgguNm] = useState("");
  const [list, setList] = useState("");
  const [tel, setTel] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState("");

  // function GetClinic() {
  useEffect(() => {
    axios
      .get("https://www.ttockclinic.com/v1/clinics/waitings", {
        params: { latitude: "11", longitude: "22" },
      })
      .then((response) => console.log(response));
    axios.get("https://www.ttockclinic.com/v1/clinic-url").then((response) => {
      const dataList = response.data.response.body.items.item;
      console.log(dataList);
      dataList.map((name) =>
        clinicNameArr.push(
          <TouchableOpacity
            style={styles.listContent}
            value={selectedIndex}
            onPress={(e) => {
              setSelectedIndex($(e.target).text());
              navigation.navigate("Interview");
            }}
          >
            <ListItem bottomDivider>
              <Avatar source={{ uri: name.yadmNm }} />

              <ListItem.Content style={{ width: "10%" }}>
                <>
                  <ListItem.Title>{name.yadmNm}&nbsp;</ListItem.Title>
                  <ListItem.Subtitle>
                    {name.sidoNm} {name.sgguNm}
                  </ListItem.Subtitle>
                </>
                <ListItem.Subtitle>{name.hospTyTpCd}</ListItem.Subtitle>
                <ListItem.Subtitle>{name.telno}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        )
      );

      setClinicNm(clinicNameArr);
      // setSidoNm(sidoNameArr);
      // setSgguNm(sgguNameArr);
    });
  });
  console.log("clinicNm", clinicNm);

  // console.log("1 list", list);
  // setList(list);
  // }
  // GetClinic();
  return (
    <View style={styles.body}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
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
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor={"#00462a"}
      ></Header>
      <View style={styles.container}>
        <View style={styles.clinicInfo}>
          <View style={styles.container1}>
            <Card.Title style={styles.title}>
              <Icon name="chevron-forward-circle-outline" size={30}></Icon>{" "}
              선별진료소 정보
            </Card.Title>
            <Text style={styles.mainDescription}>
              현위치에서 가까운 선별진료소의 정보입니다.
              {"\n"}자세한 정보를 보려면 선별진료소를 선택하세요.
            </Text>
          </View>
          {/* <Card> */}

          {/* </Card> */}
        </View>
        <View style={styles.container2}>
          {/* <Card containerStyle={styles.card}> */}
          {/* <Card.Title style={styles.title}>선별진료소 이름</Card.Title> */}
          <ScrollView>
            <View>
              <Card.Divider></Card.Divider>
            </View>
            <View style={styles.list}>
              <ScrollView>
                <Text>{clinicNm}</Text>
              </ScrollView>
              {/* ))} */}
            </View>
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
  container: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },
  clinicInfo: {
    flex: 0.2,
    paddingBottom: "5%",
  },
  container1: {
    alignItems: "flex-start",
    marginLeft: "5%",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  container2: {
    flex: 1.35,
    margin: 0,
    marginLeft: "5%",
    marginRight: "5%",
  },
  listContent: {
    // margin: "0.05%",
    flexDirection: "column",
    width: constants.width * 0.83,
  },
  // card: { borderColor: "#00462a", borderWidth: 2, borderRadius: 20 },
  container3: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    borderWidth: 2,
    borderRadius: 10,
    height: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
export default clinicInfo;
