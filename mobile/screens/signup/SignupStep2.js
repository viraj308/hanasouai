import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import StepHeader from "../../components/StepHeader";
import StepButtons from "../../components/StepButtons";

const INTERESTS = ["Skiing", "Pets", "Food", "Anime", "Travel", "Music", "Fitness", "Games", "Cats"];

export default function SignupStep2({ data, setData, onNext, onBack }) {
  const toggle = (item) => {
    const exists = data.interests.includes(item);
    setData({
      ...data,
      interests: exists
        ? data.interests.filter((i) => i !== item)
        : [...data.interests, item],
    });
  };

  return (
    <View style={styles.card}>
      <StepHeader title="登録ページ 02" />

      <View style={styles.grid}>
        {INTERESTS.map((i) => (
          <TouchableOpacity
            key={i}
            style={[styles.box, data.interests.includes(i) && styles.active]}
            onPress={() => toggle(i)}
          >
            <Text>{i}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <StepButtons onBack={onBack} onNext={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#FFFDF9", padding: 24, borderRadius: 24 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  box: {
    width: "30%",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#EEE",
    alignItems: "center",
  },
  active: { backgroundColor: "#FFD54F" },
});
