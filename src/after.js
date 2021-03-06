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
              πλλ μ λ³μ§λ£μπ
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
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> λ¬Έμ§ν
            μ μ μλ£
          </Card.Title>
          <Text style={styles.mainDescription}>
            λ¬Έμ§ν μ μκ° μλ£λμμ΅λλ€.
          </Text>
        </View>
        <View style={styles.container2}>
          <Card containerStyle={styles.desCard}>
            <Card.Title style={styles.desTitle}>μλ΄ μ¬ν­</Card.Title>
            <Text style={styles.mainDescription}>
              {"\n"}
              μ λ³μ§λ£μμ λμ°©νλ©΄
              {"\n"}QR μΈμκΈ°μ λμ QRμ μΈμνκ³ 
              {"\n"}μμ μ μ°¨λ‘κ° μ¬ λκΉμ§ κΈ°λ€λ¦¬μΈμ
            </Text>
            <Text style={styles.mainDescription}>
              μ μ μ λ³΄λ λ©μΈ νμ΄μ§μμ {"\n"}
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "#00462a" }}
              >
                λμ μ μ μ λ³΄
              </Text>
              λ₯Ό λλ₯΄λ©΄ {"\n"}μ‘°νν  μ μμ΅λλ€.
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
                <Card.Title style={styles.menuText}>λ΄ QR λ³΄κΈ°</Card.Title>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={styles.menu}
            >
              <Card containerStyle={styles.menu1}>
                <Card.Title style={styles.menuText}>
                  νμΌλ‘ {"\n"}λμκ°κΈ°
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
