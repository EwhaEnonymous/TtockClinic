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
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
import Dropdown from "./Dropdown";

var clinicNameArr = [];

const clinicInfo = ({ navigation, route }) => {
  const [clinicNm, setClinicNm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("");
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
        dataList.map((name) =>
          clinicNameArr.push(
            <TouchableOpacity
              style={styles.listContent}
              value={selectedIndex}
              // onPress={(e) => {
              //   // setSelectedIndex(e.target.text());

              //   navigation.navigate("Interview");
              // }}
              onPress={() => navigation.navigate("Interview", { id: name.id })}
            >
              <ListItem bottomDivider>
                <Avatar source={{ uri: name.name }} />

                <ListItem.Content style={{ width: "10%" }}>
                  <>
                    <ListItem.Title>{name.name}&nbsp;</ListItem.Title>
                    <ListItem.Subtitle>{name.address} </ListItem.Subtitle>
                    <ListItem.Subtitle>
                      대기 인원 : {name.waitings} 명
                    </ListItem.Subtitle>
                  </>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          )
        );

        setClinicNm(clinicNameArr);
      });
  });
  // console.log("clinicNm", clinicNm);

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
