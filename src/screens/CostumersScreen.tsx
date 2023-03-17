import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";

const CostumersScreen = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView className="bg-[#59c1cc]">
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        className="w-full h-64"
      />

      <View className="bg-white py-5  px-10 ">
        <TextInput
          placeholder="Search by Customer"
          className="border-b border-gray-400 text-lg pb-2 placeholder:font-light"
          onChangeText={setInput}
        />
      </View>
    </ScrollView>
  );
};

export default CostumersScreen;
