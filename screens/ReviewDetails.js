import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details Screen</Text>
      <Button onPress={() => navigation.navigate("About")} title="About" />
    </View>
  );
};

export default ReviewDetails;
