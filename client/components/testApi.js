import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// import Config from "react-native-config";
const TestApi = () => {
  const [test, setTest] = useState();
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch("http://10.0.0.102:3001/api/test")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setTest(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data:");
      });
  }, [click]);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <View>
      <Button title={"Test"} onPress={handleClick} />
      {test !== undefined && <Text>{JSON.stringify(test.name)}</Text>}
    </View>
  );
};

export default TestApi;
