import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
// import constants from "./constants";
import { Header, Card, ListItem, Avatar } from "react-native-elements";
import axios from "axios";
const clinicInfo_next = ({ navigation, route }) => {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [openWeekday, setOpenWeekday] = useState("");
  const [openHoliday, setOpenHoliday] = useState("");
  const [openSat, setOpenSat] = useState("");
  const [waitings, setWaitings] = useState(0);
  const [clinicId, setClinicId] = useState(0);
  axios
    .get(`https://www.ttockclinic.com/v1/clinic/${route.params.id}`)
    .then((response) => {
      console.log(response);
      setClinicId(response.data.id);
      setAddress(response.data.address);
      setName(response.data.name);
      setOpenHoliday(response.data.holidayOpeningHours);
      setOpenWeekday(response.data.weekdayOpeningHours);
      setOpenSat(response.data.saturdayOpeningHours);
      setWaitings(response.data.waitings);
      console.log(clinicId);
    })
    .catch((error) => {
      console.log(error);
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
            현위치에서 가까운 선별진료소의 정보입니다.
            {"\n"}자세한 정보를 보려면 선별진료소를 선택하세요.
          </Text>
          <View style={styles.container2}>
            <Text>
              <Card>
                <Card.Title style={styles.listTitle}>{name}</Card.Title>
                <Text style={styles.listSub}>주소</Text>
                <Text style={styles.listDes}>{address}</Text>
                <Card.Divider />
                <Text style={styles.listSub}>주중 운영시간</Text>
                <Text style={styles.listDes}>{openWeekday}</Text>
                <Card.Divider />
                <Text style={styles.listSub}>휴일 운영시간</Text>
                <Text style={styles.listDes}>{openHoliday}</Text>
                <Card.Divider />
                <Text style={styles.listSub}>대기 인원</Text>
                <Text style={styles.listDes}>{waitings}명</Text>
              </Card>
            </Text>
          </View>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Interview", { id: clinicId })}
          >
            <Text>
              <Icon
                name="chevron-forward-circle-outline"
                size={30}
                color="white"
              ></Icon>
              <Text style={styles.buttonText}> 문진표 작성하기</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "5%",
  },
  container1: {
    flex: 1.2,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    margin: 0,
    flex: 1,
  },
  container3: {
    flex: 0.2,
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
    width: "100%",
    color: "#00462a",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "2%",
    fontSize: 25,
    fontWeight: "bold",
    borderRadius: 4,
  },
  listDes: {
    paddingLeft: "3%",
    paddingBottom: "5%",
    fontSize: 20,
    marginTop: "2%",
  },
  button: {
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    borderWidth: 2,
    borderRadius: 10,
    height: "50%",
    marginTop: "5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
});
export default clinicInfo_next;
