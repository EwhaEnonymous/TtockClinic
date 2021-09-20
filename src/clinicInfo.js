import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
// import constants from "./constants";
import { Header, Card, ListItem, Avatar } from "react-native-elements";

const list = [
  {
    clinicid: 0,
    cname: "1번 진료소",
    loc: "서울특별시 강남구 삼성2동 선릉로 668",
    waitings: "00명",
  },
  {
    clinicid: 1,
    cname: "2번 진료소",
    loc: "서울특별시 강남구 삼성2동 선릉로 668",
    waitings: "00명",
  },
  {
    clinicid: 2,
    cname: "3번 진료소",
    loc: "서울특별시 강남구 삼성2동 선릉로 668",
    waitings: "00명",
  },
];
const clinicInfo = ({ navigation }) => {
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

          <View>
            <Card.Divider></Card.Divider>
          </View>
          <View style={styles.list}>
            {list.map((l, i) => (
              <TouchableOpacity
                style={styles.listContent}
                onPress={() => navigation.navigate("ClinicNext")}
              >
                <ListItem key={i} bottomDivider>
                  <Avatar source={{ uri: l.loc }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.cname}</ListItem.Title>
                    <ListItem.Subtitle>{l.loc}</ListItem.Subtitle>
                    <ListItem.Subtitle>{l.waitTime}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
            ))}
            {/* </Card> */}
          </View>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Interview")}
          >
            <Text style={styles.buttonText}>다음 화면으로 넘어감</Text>
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
    flex: 1.3,
    margin: 0,
    marginLeft: "5%",
    marginRight: "5%",
  },
  list: { borderWidth: 1, borderColor: "#00462a" },
  listContent: {
    margin: "0.5%",
    backgroundColor: "blue",
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
