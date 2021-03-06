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

      {/* Container 1 */}
      <View style={styles.container}>
        {/* μ½λ‘λ μ λ³΄ */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Patient")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="analytics-outline" size={50}></Icon>
              <Card.Title style={styles.cardTitle}>μ½λ‘λ μ λ³΄</Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              μ€λμ μ½λ‘λ νμ§μ μ λ³΄λ₯Ό μμλ³΄μΈμ
            </Text>
          </Card>
        </TouchableOpacity>
        {/* κ°κΉμ΄ μ λ³μ§λ£μ */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("CurLoc")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="navigate-outline" size={40}></Icon>
              <Card.Title style={styles.cardTitle}>
                κ°κΉμ΄ μ λ³μ§λ£μ
              </Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              κ°μ₯ κ°κΉμ΄ μ λ³μ§λ£μλ₯Ό μ°Ύμλ³΄μΈμ
            </Text>
          </Card>
        </TouchableOpacity>
        {/* μ§μ­λ³ μ λ³μ§λ£μ */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Location")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="map-outline" size={50}></Icon>
              <Card.Title style={styles.cardTitle}>
                μ§μ­λ³ μ λ³μ§λ£μ
              </Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              μνλ μ§μ­μ μ λ³μ§λ£μλ₯Ό μ°Ύμλ³΄μΈμ
            </Text>
          </Card>
        </TouchableOpacity>
        {/* λμ QR */}
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("qrCheck")}
        >
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.cardView}>
              <Icon name="qr-code-outline" size={50}></Icon>
              <Card.Title style={styles.cardTitle}>λμ μ μ μ λ³΄</Card.Title>
            </View>
            <Card.Divider />
            <Text style={styles.cardDescription}>
              λμ μ μ λ΄μ­μ νμΈνμΈμ
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
  menuText: {
    color: "#fff",
    fontSize: 20,
    marginRight: "5%",
  },
  container: {
    flex: 1,
    marginTop: "8%",
    marginBottom: "8%",
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
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 30,
    paddingTop: 8,
    marginRight: 10,
  },
  cardDescription: {
    fontSize: 20,
    textAlign: "center",
  },
});
export default MainPage;
