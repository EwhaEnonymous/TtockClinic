import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import "react-native-gesture-handler";
import { Header, Input, Card, ButtonGroup } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import constants from "./constants";
import axios from "axios";

function Interview({ navigation }) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState(0);
  const [phone, setPhone] = useState("");
  // const [gen, setGen] = useState("");
  const gender = ["μ¬μ±", "λ¨μ±"];
  //const [values, setValues] = useState({name:"", birth:"", phone:""});
  const [selectedIndex, setSelectedIndex] = useState("");

  const handleSubmit = (e) => {
    console.log(name, birth, phone);
  };

  // axios
  //   .post("/v1/papers", { loc: "????", name: name, phone: phone })
  //   .then((response) => console.log(response.data))
  //   .catch((response) => {
  //     console.log("Error!");
  //   });

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
              πλλ μ λ³μ§λ£μπ
            </Text>
          </TouchableOpacity>
        }
        placement="center"
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor={"#00462a"}
      ></Header>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Card.Title style={styles.title}>
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> λ¬Έμ§ν
            μμ±νκΈ°
          </Card.Title>
          <Text style={styles.mainDescription}>λ¬Έμ§νλ₯Ό μμ±νμ¬ μ£ΌμΈμ.</Text>
        </View>
        <View style={styles.container2}>
          <form onSubmit={handleSubmit}>
            <Input
              label="μ΄λ¦"
              placeholder="νκΈΈλ"
              style={styles}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              label="μλμμΌ"
              placeholder="14430815"
              style={styles}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <Input
              label="ν΄λν°λ²νΈ"
              placeholder="010-1234-5678"
              style={styles}
              onChange={(e) => {
                setPhone(e);
              }}
            />
            <TouchableOpacity>
              <ButtonGroup
                buttons={gender} //μ¬μ±, λ¨μ±
                selectedIndex={selectedIndex}
                selectedTextStyle={{
                  backgroundColor: "#00462a",
                  color: "white",
                }}
                selectedButtonStyle={{ backgroundColor: "#00462a" }}
                containerStyle={styles.genderButton} //css
                textStyle={styles.genderText} //νμ€νΈ css
                onPress={(e) => setSelectedIndex(e)}
              />
            </TouchableOpacity>
            <button type="submit">submit</button>
          </form>
          <View>{/* μΆκ°μ μΈ μ λ³΄ λ€μ΄κ° λΆλΆ */}</View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Clinic")}
        >
          <Text>
            <Icon
              name="chevron-forward-circle-outline"
              size={30}
              color="white"
            ></Icon>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("After")}
            >
              λ¬Έμ§ν μμ± μλ£
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
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
    margin: "5%",
    // backgroundColor: "red",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  container1: {
    flex: 0.3,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 1.5,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "10%",
  },
  genderText: {
    fontSize: 18,
    color: "#00462a",
  },
  genderButton: {
    borderColor: "#00462a",
    backgroundColor: "white",
    borderRadius: 8,
    margin: "0.1%",
    height: "50px",
    // width: "300px",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    fontSize: constants.width > 370 ? 30 : 18,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    marginTop: "5%",
    borderRadius: 8,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: Dimensions.get("window").height * 0.08,
  },
  buttonText: {
    fontSize: constants.width > 370 ? 30 : 24,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
export default Interview;
