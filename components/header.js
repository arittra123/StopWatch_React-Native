import react from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: StatusBar.currentHeight,
    // backgroundColor: "#E0E3E5",
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#355B84",
  },
});
