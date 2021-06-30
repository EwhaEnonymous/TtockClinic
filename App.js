import React from "react";
import MainPage from "./MainPage";
import QR from "./myQR";
import CurLoc from "./currentLocation";
import Clinic from "./clinicInfo";
import Patient from "./patientInfo";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator(); //Stack 형태의 네비게이션을 만들기 위해 Navigator 와 Screen 을 값으로 갖는 객체를 반환한다.

const App = () => {
  return (
    //네비게이션 계층 구조와 네비게이션 상태를 관리하는 컨테이너 역할
    <NavigationContainer>
      {/* Screen 을 관리하는 중간 관리자 역할 */}
      <Stack.Navigator>
        {/* 페이지(컴포넌트) 의 별명과 컴포넌트를 각각 name / component 라는 props 로 가지며, 하나의 Navigator 에 여러 스크린이 들어갈 수도 있음. */}
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Patient"
          component={Patient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Clinic"
          component={Clinic}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QR"
          component={QR}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CurLoc"
          component={CurLoc}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
