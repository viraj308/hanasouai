import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import SignupStep3 from "./SignupStep3";
import SignupStep4 from "./SignupStep4";

export default function SignupFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
  email: "",
  age: "",
  jlpt: "",
  gender: "",
  country: "",
  interests: [],
  nickname: "",
  skills: "",
});

  return (
    <View style={styles.screen}>
      {step === 1 && <SignupStep1 data={data} setData={setData} onNext={() => setStep(2)} />}
      {step === 2 && <SignupStep2 data={data} setData={setData} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
      {step === 3 && <SignupStep3 data={data} setData={setData} onBack={() => setStep(2)} onNext={() => setStep(4)} />}
      {step === 4 && <SignupStep4 onBack={() => setStep(3)} onSave={() => console.log("SUBMIT", data)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF6EA",
    justifyContent: "center",
    padding: 20,
  },
});
