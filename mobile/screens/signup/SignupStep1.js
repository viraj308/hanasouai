import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import StepHeader from "../../components/StepHeader";
import StepButtons from "../../components/StepButtons";

export default function SignupStep1({ data, setData, onNext }) {
  return (
    <View style={styles.card}>
      <StepHeader title="登録ページ 01" />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={data.email}
        onChangeText={(v) => setData({ ...data, email: v })}
        placeholder="Enter your Email address"
      />

      <Text>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={data.age}
        onChangeText={(v) => setData({ ...data, age: v })}
        placeholder="Enter your age"
      />

      <StepButtons onNext={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFDF9",
    padding: 24,
    borderRadius: 24,
  },
  input: {
    backgroundColor: "#FFF3E6",
    padding: 12,
    borderRadius: 14,
    marginBottom: 16,
  },
});
