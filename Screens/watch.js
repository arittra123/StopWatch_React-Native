import react from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import Header from "../components/header";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Watch() {
  let today = new Date();
  const [Hours, setHours] = useState(today.getHours());
  const [Minute, setMinute] = useState(today.getMinutes());
  const [Second, setSecond] = useState(today.getSeconds());
  let Sec = Second,
    Min = Minute,
    Hr = Hours;
  const [cityName, setcityName] = useState([
    {
      cityName: "Asansol",
    },
    {
      cityName: "Kolkata",
    },
    {
      cityName: "New Delhi",
    },
    {
      cityName: "Mumbai",
    },
    {
      cityName: "Durgapur",
    },
  ]);

  useEffect(() => {
    setInterval(() => {
      if (Sec == 59) {
        setMinute((prevmin) => {
          Min = prevmin + 1;
          return Min;
        });
        setSecond(0);
      }
      if (Min == 59 && Sec == 59) {
        setHours((prevhr) => {
          Hr = prevhr + 1;
          return Hr;
        });
        setMinute(0);
      }
      setSecond((prevsec) => {
        Sec = prevsec + 1;
        return Sec;
      });
    }, 1000);
  }, []);

  const addCity = () => {};

  return (
    <SafeAreaView style={Styles.container}>
      <Header title="Clock" />
      <View style={Styles.datetimeBody}>
        <View style={Styles.indianStd}>
          <Text style={Styles.time}>{Hr} :</Text>
          <Text style={Styles.time}> {Min} :</Text>
          <Text style={Styles.time}> {Sec}</Text>
        </View>
        <View style={Styles.timeZone}>
          <Text style={Styles.timeZoneText}>India Standard Time</Text>
        </View>
      </View>
      <Pressable onPress={addCity}>
        <View style={Styles.plusIcon}>
          <AntDesign name="plussquareo" size={28} color="black" />
        </View>
      </Pressable>
      <ScrollView style={Styles.localTimeZoneCon}>
        {cityName.map((item, key) => {
          return (
            <View style={Styles.localTimeZone} key={key}>
              <View>
                <Text style={Styles.cityName}>{item.cityName}</Text>
                <Text style={Styles.timeZoneText}>Local Time Zone</Text>
              </View>
              <View style={Styles.localTimeZoneTime}>
                <Text style={Styles.localTime}>00 :</Text>
                <Text style={Styles.localTime}> 00 :</Text>
                <Text style={Styles.localTime}> 00</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datetimeBody: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  indianStd: {
    flexDirection: "row",
    marginTop: 20,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  timeZone: {
    alignItems: "center",
    marginTop: 12,
  },
  localTimeZoneCon: {
    flex: 1,
    padding: 8,
  },
  localTimeZone: {
    backgroundColor: "#F8F9F9",
    flexDirection: "row",
    borderWidth: 1,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    borderColor: "#D3D5D6",
    margin: 10,
  },
  localTimeZoneTime: {
    flexDirection: "row",
  },
  time: {
    fontSize: 34,
    color: "#3C3C3C",
  },
  cityName: {
    fontSize: 20,
    fontWeight: "500",
    color: "#3C3C3C",
  },
  localTime: {
    fontWeight: "500",
    color: "#3C3C3C",
  },
  timeZoneText: {
    color: "#919192",
  },
  plusIcon: {
    padding: 2,
    marginBottom: 12,
    alignItems: "flex-end",
    paddingRight: 20,
  },
});
