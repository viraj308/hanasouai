import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import StepHeader from "../../components/StepHeader";
import StepButtons from "../../components/StepButtons";
import { Picker } from "@react-native-picker/picker";

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"];
const GENDERS = ["Male", "Female", "Others"];

export default function SignupStep1({ data, setData, onNext }) {
  return (
    <View style={styles.card}>
      <StepHeader title="登録ページ 01" />

      {/* Email */}
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={data.email}
        onChangeText={(v) => setData({ ...data, email: v })}
        placeholder="Enter your Email address"
      />

      {/* JLPT */}
      <Text>JLPT Level</Text>
      <View style={styles.row}>
        {JLPT_LEVELS.map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.pill,
              data.jlpt === level && styles.active,
            ]}
            onPress={() => setData({ ...data, jlpt: level })}
          >
            <Text>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Gender */}
      <Text>Gender</Text>
      <View style={styles.row}>
        {GENDERS.map((g) => (
          <TouchableOpacity
            key={g}
            style={[
              styles.pill,
              data.gender === g && styles.active,
            ]}
            onPress={() => setData({ ...data, gender: g })}
          >
            <Text>{g}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Country */}
      <Text>Country</Text>
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={data.country}
          onValueChange={(v) => setData({ ...data, country: v })}
        >
          <Picker.Item label="Choose your country" value="" />
          <Picker.Item label="Japan" value="Japan" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="USA" value="USA" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      {/* Age */}
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 16,
  },
  pill: {
    backgroundColor: "#EEE",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  active: {
    backgroundColor: "#FFD54F",
  },
  pickerBox: {
    backgroundColor: "#FFF3E6",
    borderRadius: 14,
    marginBottom: 16,
  },
});
