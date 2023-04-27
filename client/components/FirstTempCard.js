import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Card, Icon } from "@rneui/themed";

const FirstTempCard = () => {
  const [firstData, setFirstData] = useState();

  // const weatherIcon = `http://openweathermap.org/img/w/${firstData.weather[0].icon}.png`;
  // console.log(firstData);

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
        setFirstData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching data:");
      });
  }, []);
  // console.log(firstData);

  const WeatherForecast = ({ firstData }) => {
    const noonTemps = firstData.list.filter((data) =>
      data.dt_txt.includes("12:00:00")
    );
    const renderForecastCards = () => {
      return noonTemps.map((data) => {
        const date = new Date(data.dt * 1000);
        const dateOptions = {
          month: "long",
          day: "numeric",
        };
        // console.log(data.weather[0].icon);
        const dayOfMonth = date.toLocaleDateString("en-US", dateOptions);
        const dayOfWeek = date.toLocaleDateString("en-US", dateOptions);
        return (
          <View key={data.dt} style={styles.card}>
            <View style={styles.TempContainer}>
              <Text style={styles.temp}>{Math.ceil(data.main.temp)}°C</Text>
              <Text style={styles.day}>{dayOfMonth}</Text>
              <Image
                style={styles.icon}
                source={{
                  uri: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                }}
              />
            </View>
          </View>
        );
      });
    };
    return renderForecastCards();
  };

  return (
    <View style={styles.container}>
      {firstData !== undefined && (
        <View>
          <Text style={styles.title}>{`${firstData.city.name}'s weather`}</Text>
          <View style={styles.InfoContainer}>
            <WeatherForecast firstData={firstData} />
          </View>
          {/* 
          <Text style={styles.description}>{`Current Temperature: ${Math.ceil(
            data.main.temp
          )}°C`}</Text>
          <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            data.main.temp_max
          )}°C`}</Text>
          <Text
            style={styles.description}
          >{`Today's Max Temperature: ${Math.ceil(
            data.main.temp_min
          )}°C`}</Text> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  InfoContainer: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "pink",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    // backgroundColor: "brown",
    borderRadius: 5,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: "blue",
    borderRadius: 5,
    marginBottom: 10,
  },
  TempContainer: {
    // backgroundColor: "red",
  },
  // day: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   padding: 10,
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },
  // temp: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   padding: 10,
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  //   marginBottom: 10,
  // },
});

export default FirstTempCard;
