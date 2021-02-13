import React from "react";
import { TouchableOpacity, Text, Button, Alert, StyleSheet } from "react-native";
import { ScreenContainer } from "react-native-screens";

export const ScreenList = ({ navigation }) => {
  return (
    <ScreenContainer style={styles.container}>
      <Text>화면 리스트(Dev)</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.push("Login")}>
        <Text style={styles.text}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.push("CreateAccount")}>
        <Text style={styles.text}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.push("CreateAccount")}>
        <Text style={styles.text}>리스트</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.push("CreateAccount")}>
        <Text style={styles.text}>수필인의 방</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: "#fe5746",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "#fff",
  },
});
