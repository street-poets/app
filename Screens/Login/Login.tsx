import React from "react";
import { Text, Alert, View, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const Login = (navigation: object) => {
  const [data, setData] = React.useState({
    username: "", //유저이름
    password: "", //비밀번호
    check_textInputChange: false, //?
    secureTextEntry: true, //비밀번호 TextInput 암호화 여부
    isValidUser: true, // 이메일 정규 여부
    isValidPassword: true, //비밀번호 정규 여부
  });

  const verifyEmail = (userEmail: string) => {
    // 이메일 검증 스크립트 작성

    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // 검증에 사용할 정규식 변수 regExp에 저장

    if (userEmail.match(regExp) != null) {
      setData({
        ...data,
        username: userEmail,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        check_textInputChange: false,
      });
    }
  };

  const verifyPass = (userPwd: string) => {
    setData({
      ...data,
      password: userPwd,
    });
  };

  const submitLoginInfo = (userEmail: string, userPwd: string) => {
    Alert.alert("아이디 : " + userEmail + " //  비밀번호 : " + userPwd);
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <View style={styles.box}>
          <Text style={styles.boxText}>글의 집</Text>
          <Text style={styles.boxText}>geul`s house</Text>
        </View>
      </View>

      <View style={styles.bodyView}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="이메일을 입력해주세요."
            placeholderTextColor="#666666"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(val) => verifyEmail(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Image source={require("../Resources/check-circle.png")} />
            </Animatable.View>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor="#666666"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(val: string) => verifyPass(val)}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => submitLoginInfo(data.username, data.password)}>
            <Text style={{ color: "white" }}>로그인 하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => submitLoginInfo(data.username, data.password)}>
            <Text style={{ color: "white" }}>카카오 로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => submitLoginInfo(data.username, data.password)}>
            <Text style={{ color: "white" }}>네이버 아이디 로그인</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerView}>
        <Text>글의 집 - created by Street`s of poets</Text>
        <Text>copyright - 거리의 시인들</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fe5746",
    alignItems: "center",
    flexDirection: "column",
  },
  headerView: { alignItems: "center", flexDirection: "column", backgroundColor: "white", marginBottom: 30 },
  bodyView: { flex: 6, width: "100%", backgroundColor: "white" },
  footerView: { flex: 1, backgroundColor: "#fe5746" },

  box: {
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
  button: {
    width: 150,
    height: 60,
    backgroundColor: "#394867",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  input: {
    backgroundColor: "#e8e8e8",
    width: "100%",
    padding: 10,
    borderRadius: 20,
  },
});
