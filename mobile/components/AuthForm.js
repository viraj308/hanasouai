import React from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function AuthForm({
  title,
  subtitle,
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
  buttonText,
}) {
  return (
    <View style={styles.screen}>
      <Image
  source={require("../assets/mosaique_logo_s.png")}
  style={styles.logo}
/>

      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        {/* Email */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        {/* Password */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <Text style={styles.forgot}>Forgot password?</Text>

        {/* Login button */}
        <TouchableOpacity style={styles.primaryButton} onPress={onSubmit}>
          <Text style={styles.primaryButtonText}>{buttonText}</Text>
        </TouchableOpacity>

        <Text style={styles.or}>or</Text>

        {/* Social login */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.socialText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleButton}>
          <Text style={styles.appleText}>Login with Apple</Text>
        </TouchableOpacity>
      </View>
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
  card: {
    backgroundColor: "#FFFDF9",
    borderRadius: 24,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginVertical: 6,
    color: "#666",
  },
  inputWrapper: {
    backgroundColor: "#FFF3E6",
    borderRadius: 14,
    marginTop: 14,
    paddingHorizontal: 14,
  },
  input: {
    height: 48,
  },
  forgot: {
    textAlign: "right",
    marginTop: 8,
    color: "#999",
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: "#FFD54F",
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 16,
  },
  primaryButtonText: {
    textAlign: "center",
    fontWeight: "700",
  },
  or: {
    textAlign: "center",
    marginVertical: 12,
    color: "#999",
  },
  googleButton: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 12,
    borderRadius: 14,
    marginBottom: 10,
  },
  appleButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 14,
  },
  socialText: {
    textAlign: "center",
  },
  appleText: {
    textAlign: "center",
    color: "#FFF",
  },
  logo: {
  width: 80,
  height: 80,
  alignSelf: "center",
  marginBottom: 20,
  resizeMode: "contain",
},

});
