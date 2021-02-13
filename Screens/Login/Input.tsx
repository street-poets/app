import React from "react";
import { TextInput, StyleSheet } from "react-native";

export function Input({ style, ...props }) {
  return <TextInput {...props} style={[style, styles.input]}></TextInput>;
}

const styles = StyleSheet.create({
  input: { backgroundColor: "#e8e8e8", width: "100%", padding: 10, borderRadius: 20 },
});
