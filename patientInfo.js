import React from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";

export default function patientInfo() {
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.up0}>
          <Text style={styles.up0text}>전일대비 +000명</Text>
        </View>
        <View style={styles.container3}>
          <View style={styles.up1}>
            <View style={styles.box1}>
              <Text style={styles.boxtext1}>확진환자</Text>
              <Text style={styles.boxtext2}>100,000</Text>
              <Text style={styles.boxtext3}>+200</Text>
            </View>
            <View style={styles.box2}>
              <Text style={styles.boxtext1}>격리해제</Text>
              <Text style={styles.boxtext2}>100,000</Text>
              <Text style={styles.boxtext3}>+200</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.boxtext1}>사망자</Text>
              <Text style={styles.boxtext2}>100,000</Text>
              <Text style={styles.boxtext3}>+200</Text>
            </View>
            <View style={styles.box4}>
              <Text style={styles.boxtext1}>검사진행</Text>
              <Text style={styles.boxtext2}>100,000</Text>
              <Text style={styles.boxtext3}>+200</Text>
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("지도")}
          >
            <Text style={styles.text}>지도</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("지역별 표")}
          >
            <Text style={styles.text}>지역별 표</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("누적확진 추이")}
          >
            <Text style={styles.text}>누적확진 추이</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("일별 신규 확진자수")}
          >
            <Text style={styles.text}>일별 신규 확진자수</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container5}>
          <Text style={styles.graph}>위 버튼 누르면 그래프 바뀜</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footer}>Enonymous</Text>
      </View>
    </View>
  );
}
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

  header: {
    color: "white",
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: "bold",
    height: 50,
    margin: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  up0: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  up0text: { fontSize: 50, color: "red" },
  container3: {
    flex: 1,
    width: "96%",
    alignItems: "center",
  },
  up1: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  box1: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  box2: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  box3: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  box4: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  boxtext1: {
    fontSize: 23,
    fontWeight: "bold",
    paddingTop: 5,
    marginBottom: 5,
  },
  boxtext2: {
    fontSize: 20,
    color: "blue",
    marginBottom: 5,
  },
  boxtext3: {
    fontSize: 25,
    color: "red",
    marginBottom: 5,
  },
  container4: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-start",
    // backgroundColor: "darkblue",
  },
  text: {
    color: "black",
    fontSize: 15,
  },
  btn: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "black",
    padding: 5,
  },
  container5: {
    flex: 3.5,
    width: "96%",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  graph: {
    fontSize: 30,
    fontWeight: "900",
  },
  footer: {
    flex: 0.8,
    color: "white",
    fontSize: 30,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
});
