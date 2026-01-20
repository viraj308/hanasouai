import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function StepButtons({ onBack, onNext, nextText = "Next" }) {
  return (
    <View style={styles.row}>
      {onBack && (
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.next} onPress={onNext}>
        <Text style={{ fontWeight: "700" }}>{nextText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  back: {
    backgroundColor: "#BBD9FF",
    padding: 12,
    borderRadius: 12,
    width: "40%",
    alignItems: "center",
  },
  next: {
    backgroundColor: "#FFD54F",
    padding: 12,
    borderRadius: 12,
    width: "40%",
    alignItems: "center",
  },
});
