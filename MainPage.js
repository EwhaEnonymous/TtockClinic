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
      <View style={{ flex: 1, marginTop: "8%", marginBottom: "8%" }}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Inspect")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="analytics-outline" size={50}></Icon>
              <Card.Title style={styles.cardTitle}>코로나 정보</Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              오늘의 코로나 확진자 정보를 알아보세요
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("CurLoc")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="navigate-outline" size={30}></Icon>
              <Card.Title style={styles.cardTitle}>
                가까운 선별진료소
              </Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              가장 가까운 선별진료소를 찾아보세요
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Location")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="map-outline" size={50}></Icon>
              <Card.Title style={styles.cardTitle}>
                지역별 선별진료소
              </Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              원하는 지역의 선별진료소를 찾아보세요
            </Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("QR")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="qr-code-outline" size={50}></Icon>
              <Card.Title style={styles.cardTitle}>나의 QR</Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
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
  headerText: {
    color: "#fff",
    letterSpacing: 3,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardContainer: {
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 20,
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 80,
  },
  cardTitle: {
    fontSize: screenwidth > 365 ? 30 : 20,
    paddingTop: 8,
  },
  cardDescription: {
    fontSize: screenwidth > 365 ? 20 : 15,
    textAlign: "center",
  },
});
export default MainPage;
