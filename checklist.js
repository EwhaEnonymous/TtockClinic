import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import QrGenerator from "./qrGenerator";
export default function checklist() {
    return(
        <View style={styles.body}>
            <View style={styles.container1}>
                <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footer}>Enonymous</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "white",
    },
    container1: {
      flex: 1.5,
      backgroundColor: "#00462a",
      alignItems: "center",
      marginTop: 0,
      height: 5,
    },
    containertitle: {
      flex: 0.7,
      fontSize: 25,
      alignItems: "center",
      marginTop: 5,
    },
    container2: {
      flex: 3,
      fontSize: 50,
      backgroundColor: "white",
      alignItems: "flex-start",
      borderWidth: 2,
      borderRadius: 15,
      marginLeft: 10,
      marginRight: 10,
      height: 30,
      justifyContent: "center",
    },
    container3: {
      flex: 6,
      alignItems: "center",
      borderWidth: 2,
      borderRadius: 15,
      margin: 10,
      marginTop: 0,
    },
    title: {
      color: "black",
      fontSize: 25,
      letterSpacing: 5,
    },
    info: {
      color: "black",
      fontSize: 20,
      letterSpacing: 4,
      padding: 2,
      paddingLeft: 7,
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
    footer: {
      flex: 1,
      color: "white",
      fontSize: 30,
      letterSpacing: 3,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#00462a",
    },
  });