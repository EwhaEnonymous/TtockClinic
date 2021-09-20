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
import axios from "axios";
const clinicInfo_next = ({ navigation }) => {
  // axios
  //   .get("/v1/clinic-url")
  //   .then((response) => console.log(response.data))
  //   .catch((err) => {
  //     console.log(err);
  //   });
  const response = fetch(
    // "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=x7h3QsoSTvqMkdINB49pnMFwFob%2BGJk5XPJPBNLtTt3GErqxwAHg%2F2Au%2FgUlIA%2FKcjlrK%2BbhRPRJI7AJnGh5Ag%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315"
    "v1/clinic-url"
  );
  console.log(response);
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
              여기 선별진료소 정보 나열되기
            </Text>
          </View>
          {/* <Card> */}

          {/* </Card> */}
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
export default clinicInfo_next;
