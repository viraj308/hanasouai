import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StepHeader from "../../components/StepHeader";
import StepButtons from "../../components/StepButtons";

export default function SignupStep4({ onBack, onSave }) {
  return (
    <View style={styles.card}>
      <StepHeader title="登録ページ 04" />

      <ScrollView style={styles.box}>
        <Text>
          Terms & Conditions (T&Cs) are a legally binding agreement...
        </Text>
      </ScrollView>

      <StepButtons onBack={onBack} onNext={onSave} nextText="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#FFFDF9", padding: 24, borderRadius: 24 },
  box: { maxHeight: 200 },
});
