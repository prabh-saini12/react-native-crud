import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AllItems from "./AllItems";
import LowStock from "./LowStock";
import CreateScreen from "./CreateScreen";

const Data = [
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
  const [activeview, setView] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            activeview === 0 ? { backgroundColor: "#72C37AFF" } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text
            style={[
              styles.btnText,
              activeview === 0 ? { color: "white" } : null,
            ]}
          >
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            activeview === 1 ? { backgroundColor: "#72C37AFF" } : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text
            style={[
              styles.btnText,
              activeview === 1 ? { color: "white" } : null,
            ]}
          >
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            activeview === 2 ? { backgroundColor: "#72C37AFF" } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text
            style={[
              styles.btnText,
              activeview === 2 ? { color: "white" } : null,
            ]}
          >
            Create
          </Text>
        </Pressable>
      </View>

      {activeview === 0 && <AllItems data={Data} />}
      {activeview === 1 && <LowStock />}
      {activeview === 2 && <CreateScreen />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: "4%",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: "#72C37AFF",
  },
  btnText: {
    color: "#333",
    fontSize: 12,
    fontWeight: "400",
  },
});
