import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const after = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.finish}>작성 완료되었습니다.</Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.container31}>
          <TouchableOpacity
            style={styles.checkQR}
            onPress={() => navigation.navigate("QR")}
          >
            <Text style={styles.but}>내 QR 보기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container31}>
          <TouchableOpacity
            style={styles.home}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.but}>홈으로 돌아가기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container4}>
        <Text style={styles.finish}>현장 접수 안내</Text>
        <Text style={styles.guide}>
          선별진료소에 도착하면
          {"\n"}QR 인식기에 나의 QR을 인식하고
          {"\n"}자신의 차례가 올 때까지 기다리세요
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer}>Enonymous</Text>
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
    flex: 0.7,
    backgroundColor: "#00462a",
    alignItems: "center",
    marginTop: 0,
    height: 5,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  container31: {
    backgroundColor: "white",
    width: "50%",
  },
  container4: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
  },
  finish: {
    fontSize: 25,
    fontWeight: "bold",
  },
  guide: {
    fontSize: 15,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  checkQR: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    width: "90%",
    borderColor: "#00462a",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  home: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    width: "90%",
    borderColor: "#00462a",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  but: {
    fontSize: 25,
  },
  header: {
    color: "white",
    fontSize: 25,
    letterSpacing: 3,
    fontWeight: "bold",
    height: 50,
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
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
  text2: {
    color: "white",
    fontSize: 30,
  },
  footer: {
    flex: 0.6,
    color: "white",
    fontSize: 30,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
});

export default after;
