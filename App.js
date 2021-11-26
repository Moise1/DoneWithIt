import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  SafeAreaView,
  Image,
} from "react-native";

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2}> Welcome to DoneWithIt. </Text>
      <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 70, backgroundColor: "green" }}
        />
      </TouchableNativeFeedback>
      <TouchableHighlight onPress={() => console.log("Image Touched.")}>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/1038/200/300" }}
        />
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: 200,
  },
});

export default App;


// Stopped at part 1 - lesson 2 - Vid 5