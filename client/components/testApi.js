import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TestApi = () => {
  const [test, setTest] = useState();
  const [click, setClick] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=45.5031824&lon=-73.5698065&appid=af8a520e181ab2f19f9ba63d21531604&units=metric `
    )
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
