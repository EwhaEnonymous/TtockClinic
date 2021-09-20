import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { Header, Card, ListItem } from "react-native-elements";
import "react-native-gesture-handler";

import QrGenerator from "./qrGenerator";
const myQR = ({ navigation }) => {
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
        <View style={styles.reserveInfo}>
          <View style={styles.container1}>
            <Card.Title style={styles.title}>
              <Icon name="chevron-forward-circle-outline" size={30}></Icon> 접수
              정보
            </Card.Title>
            <Text style={styles.mainDescription}>
              문진표 작성을 완료한 접수 내역입니다.
            </Text>
          </View>

          <Card containerStyle={styles.card}>
            <Text style={styles.description}>날짜</Text>
            <Text style={styles.description}>시간</Text>
            <Text style={styles.description}>선별진료소</Text>
          </Card>
          {/* <ListItem></ListItem> */}
        </View>
        <Card.Divider></Card.Divider>
        <View style={styles.qrInfo}>
          <View style={styles.container1}>
            <Card.Title style={styles.title}>
              <Icon name="chevron-forward-circle-outline" size={30}></Icon> 나의
              QR
            </Card.Title>
            <Text style={styles.mainDescription}>
              해당 QR을 선별진료소에서 인식하세요.
            </Text>
          </View>
          <Card containerStyle={styles.qr}>
            <QrGenerator />
          </Card>
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
  container1: {
    alignItems: "flex-start",
    marginLeft: "5%",
  },
  card: {
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 20,
  },
  reserveInfo: { paddingBottom: "5%" },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
  },
  qrInfo: { paddingBottom: "5%" },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    color: "#00462a",
    marginTop: "1.5%",
    marginBottom: "1.5%",
  },
  qr: {
    alignItems: "center",
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 20,
  },
  // container1: {
  //   flex: 1.5,
  //   backgroundColor: "#00462a",
  //   alignItems: "center",
  //   marginTop: 0,
  //   height: 5,
  // },
  // containertitle: {
  //   flex: 0.7,
  //   fontSize: 25,
  //   alignItems: "center",
  //   marginTop: 5,
  // },
  // container2: {
  //   flex: 3,
  //   fontSize: 50,
  //   backgroundColor: "white",
  //   alignItems: "flex-start",
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   marginLeft: 10,
  //   marginRight: 10,
  //   height: 30,
  //   justifyContent: "center",
  // },
  // container3: {
  //   flex: 6,
  //   alignItems: "center",
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   margin: 10,
  //   marginTop: 0,
  // },
  // title: {
  //   color: "black",
  //   fontSize: 25,
  //   letterSpacing: 5,
  // },
  // info: {
  //   color: "black",
  //   fontSize: 20,
  //   letterSpacing: 4,
  //   padding: 2,
  //   paddingLeft: 7,
  // },
});
export default myQR;
