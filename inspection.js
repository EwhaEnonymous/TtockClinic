import React from "react";
import { StyleSheet, Text, View, Input } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import QrGenerator from "./qrGenerator";

export default function inspection() {
    return(
        <View style={styles.body}>
            <View style={styles.container1}>
                <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
            </View>
            <View>
              <Text style={styles.title}>이름</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="이름"
                keyboardType="numeric"
              />
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
    title: {
      color: "black",
      fontSize: 10,
      height: 10,
      width: 10,
      justifyContent: "flex-start",
      alignItems: "flex-start",
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