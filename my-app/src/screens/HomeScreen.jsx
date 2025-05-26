import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AllItems from "./AllItems";
import CreateScreen from "./CreateScreen";

const initialData = [
  { id: 1, name: "Wheat", stock: 25 },
  { id: 2, name: "Rice", stock: 40 },
  { id: 3, name: "Corn", stock: 12 },
  { id: 4, name: "Barley", stock: 8 },
  { id: 5, name: "Soybeans", stock: 0 },
  { id: 6, name: "Lentils", stock: 18 },
  { id: 7, name: "Peas", stock: 30 },
  { id: 8, name: "Sorghum", stock: 6 },
  { id: 9, name: "Oats", stock: 22 },
  { id: 10, name: "Millet", stock: 4 },
];

const HomeScreen = () => {
  const [activeView, setView] = useState(0);
  const [data, setData] = useState(initialData);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        {["All Items", "Low Stock", "Create"].map((label, idx) => (
          <Pressable
            key={label}
            style={[
              styles.button,
              activeView === idx && { backgroundColor: "#72C37AFF" },
            ]}
            onPress={() => setView(idx)}
          >
            <Text style={[styles.btnText, activeView === idx && { color: "white" }]}>
              {label}
            </Text>
          </Pressable>
        ))}
      </View>

      {activeView === 0 && <AllItems data={data} />}
      {activeView === 1 && (
        <AllItems data={data.filter((item) => item.stock < 20)} />
      )}
      {activeView === 2 && <CreateScreen data={data} setData={setData} />}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginTop: 40,

  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: "#72C37AFF",
  },
  btnText: {
    fontSize: 14,
    color: "#333",
  },
});
