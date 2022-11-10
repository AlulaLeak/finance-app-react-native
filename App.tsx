import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Avatar, Button } from "@react-native-material/core";
import { firebaseApp, db, storage, auth } from "./firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function App() {
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("userInfo:", user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <View style={styles.container}>
      <Stack>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button onPress={() => console.log("thingy")} title="something">
          Button
        </Button>
        <StatusBar style="auto" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// create Login
