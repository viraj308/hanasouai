import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
  });

  // When Google responds
  if (response?.type === "success") {
    const { authentication } = response;
    console.log("Google Token:", authentication.idToken);

    // 👉 Later: send this token to Django backend
  }

  return (
    <TouchableOpacity
      style={styles.button}
      disabled={!request}
      onPress={() => promptAsync()}
    >
      <Text style={styles.text}>Login with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
  },
});
