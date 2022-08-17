import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import { useState } from "react";
import Header from "../components/header";

export default function Stopwatch() {
  const [start, setstart] = useState(true);
  const [timer, settimer] = useState();
  const [sec, setsec] = useState(0);
  const [min, setmin] = useState(0);
  const [hr, sethr] = useState(0);
  let Sec = sec,
    Min = min,
    Hr = hr;
  const [lap, setlap] = useState([]);
  const startSet = () => {
    setstart(!start);
    {
      start ? startTimer() : clearInterval(timer);
    }
  };
  const startTimer = () => {
    settimer(setInterval(() => runTimer(), 1000));
  };
  const runTimer = () => {
    if (Sec == 59) {
      setmin((prevmin) => {
        Min = prevmin + 1;
        return Min;
      });
      setsec(0);
    }
    if (Min == 59 && Sec == 59) {
      sethr((prevhr) => {
        Hr = prevhr + 1;
        return Hr;
      });
      setmin(0);
    }
    setsec((prevsec) => {
      Sec = prevsec + 1;
      return Sec;
    });
  };
  const reset = () => {
    sethr(0);
    setmin(0);
    setsec(0);
    setlap([]);
  };
  const addLap = () => {
    setlap(() => {
      return [
        {
          hour: Hr < 10 ? "0" + Hr : Hr,
          minute: Min < 10 ? "0" + Min : Min,
          second: Sec < 10 ? "0" + Sec : Sec,
        },
        ...lap,
      ];
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Stopwatch" />
      <View style={styles.timerContainer}>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{hr < 10 ? "0" + hr : hr}</Text>
        </View>
        <Text style={styles.dot}>:</Text>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{min < 10 ? "0" + min : min}</Text>
        </View>
        <Text style={styles.dot}>:</Text>
        <View style={styles.timer}>
          <Text style={styles.timerText}>{sec < 10 ? "0" + sec : sec}</Text>
        </View>
      </View>
      <ScrollView
        style={styles.lapContainer}
        showsVerticalScrollIndicator={false}
      >
        {lap.map((item, key) => {
          return (
            <View style={styles.lapView} key={key}>
              <View>
                <MaterialIcons name="lock-clock" size={24} color="#355B84" />
              </View>
              <Text style={styles.lapViewText}>
                {item.hour.toString() +
                  "   " +
                  ":" +
                  "   " +
                  item.minute.toString() +
                  "   " +
                  ":" +
                  "   " +
                  item.second.toString()}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.btnContainer}>
        <View style={styles.resetLap}>
          <View style={styles.btnsplit}>
            <TouchableOpacity onPress={reset}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>RESET</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.btnsplit}>
            <TouchableOpacity onPress={addLap}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>LAP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={startSet}>
          <View style={styles.btnRound}>
            <Text style={styles.btnRoundText}>START/STOP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  timerContainer: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  timer: {
    backgroundColor: "#F9F9F9",
    padding: 40,
    borderRadius: 8,
    margin: 2,
    elevation: 6,
  },
  timerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#464444",
  },
  dot: {
    color: "#355B84",
    fontSize: 34,
    fontWeight: "bold",
  },
  lapContainer: {
    flex: 1,
    // backgroundColor: "#464444",
  },
  btnContainer: {
    flex: 1,
    padding: 4,
    // borderWidth: 1,
  },
  btn: {
    backgroundColor: "#D3D5D6",
    borderRadius: 50,
    elevation: 2,
    padding: 10,
    alignItems: "center",
    margin: 8,
  },
  btnRound: {
    backgroundColor: "#355B84",
    borderRadius: 50,
    elevation: 2,
    alignItems: "center",
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    // fontWeight: "500",
    color: "#355B84",
  },
  btnRoundText: {
    color: "#E2EEFB",
    fontSize: 18,
    fontWeight: "500",
  },
  lapView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  lapViewText: {
    color: "#464444",
    fontSize: 18,
    fontWeight: "500",
  },
  resetLap: {
    flexDirection: "row",
    // borderWidth: 1,
    justifyContent: "center",
  },
  btnsplit: {
    // borderWidth: 1,
    width: "50%",
  },
});
