import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const CreateScreen = ({ data, setData }) => {
  const [itemName, setItemName] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const handleAddItem = () => {
    if (!itemName.trim() || isNaN(stockAmount)) return;

    const newItem = {
      id: Date.now(),
      name: itemName.trim(),
      stock: parseInt(stockAmount),
    };

    setData((prev) => [...prev, newItem]);
    clearForm();
  };

  const handleUpdateItem = () => {
    if (!itemName.trim() || isNaN(stockAmount)) return;

    setData((prev) =>
      prev.map((item) =>
        item.id === editItemId
          ? { ...item, name: itemName.trim(), stock: parseInt(stockAmount) }
          : item
      )
    );
    clearForm();
  };

  const handleDeleteItem = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEditItem = (item) => {
    setItemName(item.name);
    setStockAmount(item.stock.toString());
    setEditItemId(item.id);
    setIsEditing(true);
  };

  const clearForm = () => {
    setItemName("");
    setStockAmount("");
    setIsEditing(false);
    setEditItemId(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an Item Name ..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={setItemName}
      />

      <TextInput
        placeholder="Enter stock amount ..."
        placeholderTextColor="#999"
        style={styles.input}
        keyboardType="numeric"
        value={stockAmount}
        onChangeText={setStockAmount}
      />

      <Pressable
        style={styles.Addbutton}
        onPress={isEditing ? handleUpdateItem : handleAddItem}
      >
        <Text style={styles.btntext}>
          {isEditing ? "Update Item" : "Add Item in Stock"}
        </Text>
      </Pressable>

      <View style={{ marginTop: 10, paddingBottom: 40 }}>
        <Text style={styles.headingText}>All items in the stock</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BF" },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.stock}</Text>

              <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => handleEditItem(item)}>
                  <Text style={[styles.itemText, { color: "blue" }]}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => handleDeleteItem(item.id)}>
                  <Text style={[styles.itemText, { color: "red" }]}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "4%",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#72C37AFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    marginBottom: 10,
  },
  Addbutton: {
    backgroundColor: "#CABFEEFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
  },
  headingText: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "400",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: "center",
  },
});
