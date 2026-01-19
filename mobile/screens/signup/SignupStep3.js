import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import StepHeader from "../../components/StepHeader";
import StepButtons from "../../components/StepButtons";

export default function SignupStep3({ data, setData, onNext, onBack }) {
  return (
    <View style={styles.card}>
      <StepHeader title="登録ページ 03" />

      <Text>Nickname</Text>
      <TextInput
        style={styles.input}
        value={data.nickname}
        onChangeText={(v) => setData({ ...data, nickname: v })}
      />

      <Text>Skills</Text>
      <TextInput
        style={styles.input}
        value={data.skills}
        onChangeText={(v) => setData({ ...data, skills: v })}
      />

      <StepButtons onBack={onBack} onNext={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#FFFDF9", padding: 24, borderRadius: 24 },
  input: {
    backgroundColor: "#FFF3E6",
    padding: 12,
    borderRadius: 14,
    marginBottom: 16,
  },
});
