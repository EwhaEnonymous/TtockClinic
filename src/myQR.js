import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { Header, Card, ListItem } from "react-native-elements";
import "react-native-gesture-handler";
import axios from "axios";
import QRCode from "react-native-qrcode-svg";

const myQR = ({ navigation, route }) => {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [openWeekday, setOpenWeekday] = useState("");
  const [openSat, setOpenSat] = useState("");
  const [waitings, setWaitings] = useState(0);
  const [clinicId, setClinicId] = useState(0);
  axios
    .get("https://www.ttockclinic.com/v1/paper", {
      params: {
        name: `${route.params.name}`,
        phone: `${route.params.phone}`,
      },
    })
    .then(function (response) {
      console.log(response);
      setClinicId(response.data.clinic.id);
      setDate(response.data.date);
      setAddress(response.data.clinic.address);
      setName(response.data.clinic.name);
      setOpenWeekday(response.data.clinic.weekdayOpeningHours);
      setOpenSat(response.data.clinic.saturdayOpeningHours);
      setWaitings(response.data.clinic.waitings);
    })
    .catch(function (error) {
      console.log(error);
    });
  const QrGenerator = () => {
    return (
      <>
        <QRCode
          size={200} // 로고 사이즈 조절
          value={[
            `${route.params.name}`,
            `${route.params.phone}`,
            clinicId,
            date,
          ]} // paper_id, clinic_id
          logoSize={300}
          logoBackgroundColor="transparent"
        />
      </>
    );
  };
  return (
    <View style={styles.body}>
      <Header
        placement="left"
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
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate("qrCheck")}>
            <Text style={styles.menuText}>My</Text>
          </TouchableOpacity>
        }
        backgroundColor={"#00462a"}
      ></Header>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.reserveInfo}>
            <View style={styles.container1}>
              <Card.Title style={styles.title}>
                <Icon name="chevron-forward-circle-outline" size={30}></Icon>{" "}
                접수 정보
              </Card.Title>
              <Text style={styles.mainDescription}>
                문진표 작성을 완료한 접수 내역입니다.
              </Text>
            </View>

            <Card containerStyle={styles.card}>
              <Text style={styles.listSub}>날짜</Text>
              <Text style={styles.listDes}>{date}</Text>
              <Card.Divider />
              <Text style={styles.listSub}>선별진료소 이름</Text>
              <Text style={styles.listDes}>{name}</Text>
              <Card.Divider />
              <Text style={styles.listSub}> 선별진료소 위치</Text>
              <Text style={styles.listDes}>{address}</Text>
              <Card.Divider />
              <Text style={styles.listSub}>주중 운영시간</Text>
              <Text style={styles.listDes}>{openWeekday}</Text>
              <Card.Divider />
              <Text style={styles.listSub}>토요일 운영시간</Text>
              <Text style={styles.listDes}>{openSat}</Text>
              <Card.Divider />
              <Text style={styles.listSub}>대기 인원</Text>
              <Text style={styles.listDes}>{waitings}명</Text>
            </Card>
            {/* <ListItem></ListItem> */}
          </View>
          <Card.Divider></Card.Divider>
          <View style={styles.qrInfo}>
            <View style={styles.container1}>
              <Card.Title style={styles.title}>
                <Icon name="chevron-forward-circle-outline" size={30}></Icon>{" "}
                나의 QR
              </Card.Title>
              <Text style={styles.mainDescription}>
                해당 QR을 선별진료소에서 인식하세요.
              </Text>
            </View>
            <Card containerStyle={styles.qr}>
              <QrGenerator />
            </Card>
          </View>
        </ScrollView>
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
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
    textAlign: "left",
  },
  container1: {
    alignItems: "flex-start",
    marginLeft: "5%",
  },
  card: {
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 20,
  },
  listSub: {
    width: "100%",
    color: "#00462a",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "2%",
    fontSize: 25,
    fontWeight: "bold",
    borderRadius: 4,
  },
  listDes: {
    paddingLeft: "3%",
    paddingBottom: "5%",
    fontSize: 20,
    marginTop: "2%",
  },
  reserveInfo: { paddingBottom: "5%" },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
  },
  qrInfo: { paddingBottom: "5%" },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    color: "#00462a",
    marginTop: "1.5%",
    marginBottom: "1.5%",
  },
  qr: {
    alignItems: "center",
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 20,
  },
  // container1: {
  //   flex: 1.5,
  //   backgroundColor: "#00462a",
  //   alignItems: "center",
  //   marginTop: 0,
  //   height: 5,
  // },
  // containertitle: {
  //   flex: 0.7,
  //   fontSize: 25,
  //   alignItems: "center",
  //   marginTop: 5,
  // },
  // container2: {
  //   flex: 3,
  //   fontSize: 50,
  //   backgroundColor: "white",
  //   alignItems: "flex-start",
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   marginLeft: 10,
  //   marginRight: 10,
  //   height: 30,
  //   justifyContent: "center",
  // },
  // container3: {
  //   flex: 6,
  //   alignItems: "center",
  //   borderWidth: 2,
  //   borderRadius: 15,
  //   margin: 10,
  //   marginTop: 0,
  // },
  // title: {
  //   color: "black",
  //   fontSize: 25,
  //   letterSpacing: 5,
  // },
  // info: {
  //   color: "black",
  //   fontSize: 20,
  //   letterSpacing: 4,
  //   padding: 2,
  //   paddingLeft: 7,
  // },
});
export default myQR;
