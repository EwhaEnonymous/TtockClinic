import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import QrGenerator from "./qrGenerator";

export default function inspection({ navigation }) {
  const [name, setName] = useState("");
  return (
    <View style={styles.body}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={
          <TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                letterSpacing: 3,
                fontWeight: "bold",
                fontSize: 20,
              }}
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
            const { eventCount, target, text } = event.nativeEvent;
            setName(text);
          }}
        />
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
});
