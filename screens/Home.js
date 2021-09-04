import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("ReviewDetails")}
        title="Details Page"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
