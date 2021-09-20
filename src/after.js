import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header, Card } from "react-native-elements";

const after = ({ navigation }) => {
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
        <View style={styles.container1}>
          <View style={styles.finished}>
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.title}>
                문진표 작성이 완료되었습니다.
              </Card.Title>
            </Card>
            <Card containerStyle={styles.desCard}>
              <Card.Title style={styles.desTitle}>
                &lt; 안내 사항 &gt;
              </Card.Title>
              <Text style={styles.mainDescription}>
                선별진료소에 도착하면
                {"\n"}QR 인식기에 나의 QR을 인식하고
                {"\n"}자신의 차례가 올 때까지 기다리세요
              </Text>
            </Card>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => navigation.navigate("QR")}
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
  container: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "5%",
  },
  container1: {
    flex: 1,
    alignItems: "center",
  },
  container2: {
    flex: 0.5,
    alignItems: "flex-start",
    // backgroundColor: "green",
  },
  card: {
    flex: 1,
    borderColor: "#00462a",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderRadius: 20,
  },
  finished: { justifyContent: "center" },
  title: {
    justifyContent: "center",
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
    borderColor: "#00462a",
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
    color: "#00462a",
    fontWeight: "bold",
  },
  mainDescription: {
    paddingTop: "10%",
    fontSize: 18,
    color: "#00462a",
  },

  menu: {
    flexDirection: "row",
    margin: 0,
    flex: 0.8,
    borderColor: "#00462a",
  },
  menu1: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#00462a",
  },
  menuText: {
    fontSize: 30,
    color: "white",
    lineHeight: 40,
  },

  // container1: {
  //   flex: 0.7,
  //   backgroundColor: "#00462a",
  //   alignItems: "center",
  //   marginTop: 0,
  //   height: 5,
  // },
  // container2: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // container3: {
  //   flex: 1.5,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexDirection: "row",
  // },
  // container31: {
  //   backgroundColor: "white",
  //   width: "50%",
  // },
  // container4: {
  //   flex: 2,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   margin: 10,
  // },
  // finish: {
  //   fontSize: 25,
  //   fontWeight: "bold",
  // },
  // guide: {
  //   fontSize: 15,
  //   margin: 15,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   textAlign: "center",
  // },
  // checkQR: {
  //   flex: 1,
  //   margin: 10,
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   width: "90%",
  //   borderColor: "#00462a",
  //   height: "20%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // home: {
  //   flex: 1,
  //   margin: 10,
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   width: "90%",
  //   borderColor: "#00462a",
  //   height: "20%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // but: {
  //   fontSize: 25,
  // },
  // header: {
  //   color: "white",
  //   fontSize: 25,
  //   letterSpacing: 3,
  //   fontWeight: "bold",
  //   height: 50,
  //   margin: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // menu: {
  //   marginTop: 50,
  //   fontSize: 30,
  //   borderColor: "#00462a",
  //   backgroundColor: "#00462a",
  //   margin: 10,
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   width: "70%",
  //   height: "10%",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // text2: {
  //   color: "white",
  //   fontSize: 30,
  // },
});

export default after;
