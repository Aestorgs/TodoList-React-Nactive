import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Tâches d'aujourd'hui */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task </Text>
        <View style={styles.items}>
          {/* C'est là que la tâche ira ! */}
          <Tasks Text="Task 1" />
          <Tasks Text="Task 2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },

  items: {
    marginTop: 30,
  },
});
