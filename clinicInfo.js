import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
// import constants from "./constants";
import { Header, Card, ListItem, Avatar } from "react-native-elements";
const list = [
  {
    name: "1번 진료소",
    address: "서울특별시 강남구 삼성2동 선릉로 668",
    waitTime: "00분",
  },
  {
    name: "2번 진료소",
    address: "서울특별시 강남구 삼성2동 선릉로 668",
    waitTime: "00분",
  },
  {
    name: "3번 진료소",
    address: "서울특별시 강남구 삼성2동 선릉로 668",
    waitTime: "00분",
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
              <TouchableOpacity style={styles.listContent}>
                <ListItem key={i} bottomDivider>
                  <Avatar source={{ uri: l.address }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.address}</ListItem.Subtitle>
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
            onPress={() => navigation.navigate("Clinic")}
          >
            <Text style={styles.buttonText}>다음 화면으로 넘어감</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.container2}>
        <View style={styles.picCntr}>
          <Icon name="image-outline" size={150}></Icon>
        </View>
        <View style={styles.clinicInfo}>
          <Text style={styles.clinicName}>강남구 보건소</Text>
          <View style={styles.infoTextWrap}>
            <Text style={styles.infoText}>
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
      </View> */}
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
