import React from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import constants from "./constants";
import { Header, Card } from "react-native-elements";

const clinicInfo = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={
          <TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                letterSpacing: 3,
                fontWeight: "bold",
                fontSize: 20,
              }}
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
      <View style={styles.container2}>
        <View style={styles.picCntr}>
          <Icon name="image-outline" size={150}></Icon>
        </View>
        <View style={styles.clinicInfo}>
          <Text style={styles.clinicName}>강남구 보건소</Text>
          <View style={styles.infoTextWrap}>
            <Text style={styles.infoText}>
              {/* 추후에 주소는 따로 칸 만들어서 구현해도 좋을것 같음 */}
              <Text style={{ fontWeight: "800" }}>주소{"\n"}</Text>서울특별시
              강남구 삼성2동 선릉로 668{"\n"}
              <Text style={{ fontWeight: "800" }}>영업시간</Text>
              {"\t"} 00시 ~ 00시
              {"\n"}
              <Text style={{ fontWeight: "800" }}>영업종료</Text>
              {"\t"} 18시
              {"\n"}
              <Text style={{ fontWeight: "800" }}>연락처</Text>
              {"\t\t"} 02-3423-7200
            </Text>
          </View>
        </View>
        <View style={styles.waitInfo}>
          <Text style={styles.waitTitle}>대기자 수</Text>
          <Text style={styles.waitText}>00명</Text>
          <Text style={styles.waitTitle}>예상 대기 시간</Text>
          <Text style={styles.waitText}>00분</Text>
          <Text style={styles.waitTitle}>시간대별 방문 인원</Text>
          <Text style={styles.waitTextLast}>00명</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("After")}
        >
          <Text style={styles.text2}>다음 화면으로 넘어감</Text>
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
    marginTop: 0,
    height: 5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  picCntr: {
    flex: 0.7,
    width: "98%",
    alignItems: "center",
  },

  clinicInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 25,
    width: "98%",
  },
  infoTextWrap: {
    width: "98%",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#00462a",
  },
  clinicName: {
    color: "black",
    fontSize: 40,
    fontWeight: "900",
    margin: 5,
  },
  infoText: {
    color: "black",
    fontSize: 24,
  },
  waitInfo: {
    flex: 1,
    color: "black",
    justifyContent: "flex-start",
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    width: "96%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00462a",
  },
  waitTitle: {
    fontSize: 30,
    fontWeight: "700",
  },
  waitText: {
    fontSize: 28,
    fontWeight: "700",
    color: "red",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  waitTextLast: {
    fontSize: 28,
    fontWeight: "700",
    color: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "gray",
    fontSize: 30,
  },
  text2: {
    color: "white",
    fontSize: 30,
  },
  menu: {
    marginTop: 50,
    fontSize: 30,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    width: "70%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default clinicInfo;
