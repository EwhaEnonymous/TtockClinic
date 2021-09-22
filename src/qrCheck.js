import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { Header, Card, Input, ListItem } from "react-native-elements";
import "react-native-gesture-handler";
import constants from "./constants";
import axios from "axios";

function qrCheck ({navigation}) {
    const [phone, setPhone] = useState("");
    const handleSubmit = (e) => {
        console.log(phone);
      };
    return(
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
            <Card.Title style={styles.title}>
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> QR 코드 확인하기
          </Card.Title>
          <Text style={styles.mainDescription}>핸드폰 번호를 입력해주세요.</Text>
        </View>
        <View style={styles.container2}>
            <form onSubmit={handleSubmit}>
            <Input
              label="휴대폰번호"
              placeholder="010-1234-5678"
              style={styles}
              onChange={(e) => {
                setPhone(e);
              }}
            />
            <button type="submit">submit</button>
          </form>
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
              문진표 작성 완료
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
export default qrCheck;