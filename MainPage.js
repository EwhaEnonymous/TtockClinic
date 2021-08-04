import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { Header, Card } from "react-native-elements";
const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "💉똑똑 선별진료소💉",
          style: {
            color: "#fff",
            letterSpacing: 3,
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
        placement="center"
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor={"#00462a"}
        onPress={() => navigation.navigate("Main")}
      />
      <View style={{ flex: 1, marginTop: "8%", marginBottom: "8%" }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Patient")}
        >
          <Card
            containerStyle={{
              borderColor: "#00462a",
              borderWidth: 2,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 30,
                marginRight: 80,
              }}
            >
              <Icon name="analytics-outline" size={50}></Icon>
              <Card.Title
                style={{
                  fontSize: screenwidth > 365 ? 30 : 20,
                  paddingTop: 8,
                }}
              >
                코로나 정보
              </Card.Title>
            </View>
            <Card.Divider />
            <Text
              style={{
                fontSize: screenwidth > 365 ? 20 : 15,
                textAlign: "center",
              }}
            >
              오늘의 코로나 확진자 정보를 알아보세요
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("CurLoc")}
        >
          <Card
            containerStyle={{
              borderColor: "#00462a",
              borderWidth: 2,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 30,
                marginRight: 80,
              }}
            >
              <Icon name="navigate-outline" size={30}></Icon>
              <Card.Title
                style={{ fontSize: screenwidth > 365 ? 30 : 20, paddingTop: 8 }}
              >
                가까운 선별진료소
              </Card.Title>
            </View>
            <Card.Divider />
            <Text
              style={{
                fontSize: screenwidth > 365 ? 20 : 15,
                textAlign: "center",
              }}
            >
              가장 가까운 선별진료소를 찾아보세요
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Location")}
        >
          <Card
            containerStyle={{
              borderColor: "#00462a",
              borderWidth: 2,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 30,
                marginRight: 80,
              }}
            >
              <Icon name="map-outline" size={50}></Icon>
              <Card.Title
                style={{ fontSize: screenwidth > 365 ? 30 : 20, paddingTop: 8 }}
              >
                지역별 선별진료소
              </Card.Title>
            </View>
            <Card.Divider />
            <Text
              style={{
                fontSize: screenwidth > 365 ? 20 : 15,
                textAlign: "center",
              }}
            >
              원하는 지역의 선별진료소를 찾아보세요
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("QR")}
        >
          <Card
            containerStyle={{
              borderColor: "#00462a",
              borderWidth: 2,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginLeft: 30,
                marginRight: 80,
              }}
            >
              <Icon name="qr-code-outline" size={50}></Icon>
              <Card.Title
                style={{ fontSize: screenwidth > 365 ? 30 : 20, paddingTop: 8 }}
              >
                나의 QR
              </Card.Title>
            </View>
            <Card.Divider />
            <Text
              style={{
                fontSize: screenwidth > 365 ? 20 : 15,
                textAlign: "center",
              }}
            >
              나의 검사 예약시간을 확인하세요
            </Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    backgroundColor: "#00462a",
    alignItems: "center",
    // height: constants.height * 0.5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",

    // marginTop: constants.height > 800 ? "2%" : "2%",
    // marginBottom: constants.height > 800 ? "2%" : "2%",
  },
  header: {
    color: "white",
    // fontSize: constants.width > 370 ? 30 : 25,
    letterSpacing: 3,
    fontWeight: "bold",
    height: "50%",
    // height: constants.height > 800 ? "80%" : "50%",
    // margin: constants.height > 800 ? "15%" : "9%",

    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flex: 1,
    backgroundColor: "white",
    // margin: constants.height > 800 ? 10 : 5,
    margin: "2%",
    borderWidth: 2,
    borderRadius: 15,
    width: "90%",
    borderColor: "#00462a",
    // height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // color: "gray",
    // fontSize: constants.width > 370 ? 30 : 18,
    // marginTop: constants.height > 800 ? "2%" : "0.3%",
  },
  footer: {
    flex: 0.7,
    color: "white",
    // fontSize: constants.width > 370 ? 30 : 25,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
});
export default MainPage;
