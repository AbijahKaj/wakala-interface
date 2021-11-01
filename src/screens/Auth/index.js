import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CountryFlag from "react-native-country-flag";
import { COLORS, FONTS, SIZES } from "../../consts/theme";
import { Feather } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [countryCode, setCountryCode] = React.useState("+256");
  const [number, setNumber] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>A community that you will love.</Text>
        </View>
        <View>
          <Text style={{ ...FONTS.body3, fontSize: 14, alignSelf: "center" }}>
            Enter Phone number to Login or sign up
          </Text>
          <View
            style={{
              marginTop: 20,
              backgroundColor: COLORS.white,
              borderRadius: 10,
            }}
          >
            <View
              style={[
                styles.numberInputBlock,
                {
                  borderRadius: 10,
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              ]}
            >
              <View
                style={[
                  styles.countryInput,
                  {
                    borderTopLeftRadius: 10,
                    justifyContent: "center",
                  },
                ]}
              >
                <CountryFlag isoCode="ke" size={21} />
              </View>
              <View style={styles.border} />
              <View
                style={[
                  styles.numberInput,
                  {
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 10,
                  },
                ]}
                placeholder="Type here your phone number!"
              >
                <Text style={FONTS.body3}>Kenya</Text>
                <TouchableOpacity>
                  <LinearGradient
                    colors={COLORS.buttonGradient}
                    style={styles.countrySelectorButton}
                  >
                    <Feather name="chevron-right" size={20} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                styles.border,
                {
                  width: SIZES.width * 0.75,
                  height: 1,
                },
              ]}
            />
            <View
              style={[
                styles.numberInputBlock,
                {
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                },
              ]}
            >
              <TextInput
                style={styles.countryInput}
                placeholder="+256"
                onChangeText={(text) => setCountryCode(text)}
                defaultValue={countryCode}
              />
              <View style={styles.border} />
              <TextInput
                style={styles.numberInput}
                placeholder="Type here your phone number!"
                onChangeText={(text) => setNumber(text)}
                defaultValue={number}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("VerifyNumber")}>
            <LinearGradient
              colors={COLORS.buttonGradient}
              start={[1, 0]}
              end={[0, 1]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Create account</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={[FONTS.body3, styles.orText]}>or</Text>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(232, 200, 223, 1)", "rgba(204, 198, 210, 1)"]}
              start={[1, 0]}
              end={[0, 1]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Restore account</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 40,
  },

  titleWrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 28,
    textAlign: "left",
    color: "#4840BB",
    lineHeight: 28.44,
    fontFamily: "Rubik_500Medium",
    width: 240,
    marginBottom: 50,
  },

  buttonWrapper: {
    width: "100%",
    justifyContent: "flex-start",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    height: 56,
    width: "100%",
  },

  buttonText: {
    fontSize: 20,
    lineHeight: 23.3,
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Rubik_700Bold",
  },
  orText: {
    textAlign: "center",
    padding: 15,
    color: COLORS.textBlack,
  },
  numberInputBlock: {
    flexDirection: "row",
    width: SIZES.width * 0.8,
    height: 40,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
  countryInput: {
    width: SIZES.width * 0.15,
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.white,
  },
  numberInput: {
    width: "80%",
    paddingLeft: 5,
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 10,
  },
  border: {
    backgroundColor: COLORS.backgroundColor,
    width: 1,
    height: 25,
    alignSelf: "center",
  },
  countrySelectorButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
});
