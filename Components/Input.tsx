import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({label,placeholder}) => {
  return (
    <View style={styles.Inputs}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Inputs: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});
