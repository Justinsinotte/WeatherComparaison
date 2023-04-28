import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styled from "styled-components/native";

const CityInput = ({ inputText, setInputText }) => {
  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <InputText
      onChangeText={handleInputChange}
      value={inputText ? inputText.toString() : ""}
      placeholder="Enter city name"
    />
  );
};

const InputText = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border-radius: 5px;
`;

export default CityInput;
