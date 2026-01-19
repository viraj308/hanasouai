import React from "react";
import { Text, StyleSheet } from "react-native";

export default function StepHeader({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
});
