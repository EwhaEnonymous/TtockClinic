import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import QrGenerator from "./qrGenerator";
import { Header, Card } from "react-native-elements";

const Inspect = ({navigation}) => {
  const [name, setName] = useState('')
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
          <View>
            <Text style={styles.title}>이름</Text>
            <TextInput
              value={name}
              onChange={(event) => {
                  const {eventCount, target, text} = event.nativeEvent;
                  setName(text);
                }
              }
            />
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

  export default Inspect;