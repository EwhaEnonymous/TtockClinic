import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import constants from "./constants";
const after = ({ navigation }) => {
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
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> 문진표
            접수 완료
          </Card.Title>
          <Text style={styles.mainDescription}>
            문진표 접수가 완료되었습니다.
          </Text>
        </View>
        <View style={styles.container2}>
          <Card containerStyle={styles.desCard}>
            <Card.Title style={styles.desTitle}>안내 사항</Card.Title>
            <Text style={styles.mainDescription}>
              {"\n"}
              선별진료소에 도착하면
              {"\n"}QR 인식기에 나의 QR을 인식하고
              {"\n"}자신의 차례가 올 때까지 기다리세요
            </Text>
            <Text style={styles.mainDescription}>
              접수 정보는 메인 페이지에서 {"\n"}
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "#00462a" }}
              >
                나의 접수 정보
              </Text>
              를 누르면 {"\n"}조회할 수 있습니다.
            </Text>
          </Card>
        </View>
        <View style={styles.container3}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => navigation.navigate("qrCheck")}
              style={styles.menu}
            >
              <Card containerStyle={styles.menu1}>
                <Card.Title style={styles.menuText}>내 QR 보기</Card.Title>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={styles.menu}
            >
              <Card containerStyle={styles.menu1}>
                <Card.Title style={styles.menuText}>
                  홈으로 {"\n"}돌아가기
                </Card.Title>
              </Card>
            </TouchableOpacity>
          </View>
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

  container1: {
    flex: 0.15,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 0.5,
    borderColor: "black",
    borderRadius: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 0.2,
    alignItems: "center",
  },
  mainDescription: {
    fontSize: 20,
    color: "#00462a",
    marginBottom: "10%",
  },
  card: {
    flex: 3,
    borderColor: "#00462a",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderRadius: 20,
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
    textAlign: "left",
  },

  desCard: {
    flex: 1,
    borderColor: "#00462a",
    borderWidth: 0,
    marginTop: "5%",
    marginBottom: "5%",
    borderColor: "#00462a",
  },
  desTitle: {
    fontSize: 30,
    paddingTop: "5%",
    paddingBottom: "5%",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#00462a",
  },
  mainDescription2: {
    paddingTop: "10%",
    fontSize: 18,
    color: "#00462a",
    textAlign: "center",
  },

  menu: {
    flexDirection: "row",
    alignItems: "center",

    borderColor: "#00462a",
  },
  menu1: {
    // flex: 1,
    justifyContent: "center",
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#00462a",
  },
  menuText: {
    paddingTop: "4%",
    fontSize: 25,
    color: "white",
    lineHeight: 40,
  },
});

export default after;
