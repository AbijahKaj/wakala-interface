import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";

import ScreenCmpt from "../../components/ScreenCmpt";
import ProgressCircle from "../../components/ProgressCircle";
import FloatingDialog from "../../components/FloatingDialog";

import { GOVERNANCE, PROPOSALS, TOKENS, VOTING } from "../../assets/images";
import { COLORS, SIZES } from "../../consts/theme";

const CardInfo = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const floatingDialogRef = useRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const image = [GOVERNANCE, PROPOSALS, VOTING, TOKENS];
  const titleText = [
    "Wakala DAO Governance",
    "Proposals",
    "Voting",
    "Wakala Tokens",
  ];
  const subTitleText = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  ];
  const dialogInfoText = [
    "To learn more about Wakala Dao Governance, visit ",
    "To learn more about proposals, visit ",
    "To learn more about voting, visit ",
    "To learn more about wakala tokens, visit ",
  ];
  const dialogInfoLink = [
    "docs/wakala.xyz/wakaladaogovernance",
    "docs/wakala.xyz/proposals",
    "docs/wakala.xyz/voting",
    "docs/wakala.xyz/proposals",
  ];

  function clickNext() {
    if (index == 3) {
      setIndex(4);
      navigation.navigate("Join");
      setTimeout(() => {
        setIndex(0);
      }, 500);
    } else {
      closeDialog();
      setIndex(index + 1);
    }
  }

  const openDialog = () => {
    floatingDialogRef.current?.openDialog();
    setIsDialogOpen(!isDialogOpen);
  };

  const closeDialog = () => {
    floatingDialogRef.current?.closeDialog();
    setIsDialogOpen(!isDialogOpen);
  };

  const handleDialog = () => {
    if (isDialogOpen) {
      closeDialog();
    } else {
      openDialog();
    }
  };

  const useViewSize = () => {
    const [size, setSize] = useState(null);

    const onLayout = useCallback((event) => {
      const { x, y, width, height } = event.nativeEvent.layout;
      setSize({ x, y, width, height });
    }, []);

    return [size, onLayout];
  };

  const useTextSize = () => {
    const [size, setSize] = useState(null);

    const onLayout = useCallback((event) => {
      const { x, y, width, height } = event.nativeEvent.layout;
      setSize({ x, y, width, height });
    }, []);

    return [size, onLayout];
  };

  const [viewSize, onViewLayout] = useViewSize();
  const [textSize, onTextLayout] = useTextSize();

  return (
    <ScreenCmpt>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="list-outline" size={38} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.container}>
          <Image source={image[index]} style={styles.image} />
          <Text style={styles.title}>{titleText[index]}</Text>
          <View onLayout={onViewLayout}>
            <Text style={styles.subtitle} onLayout={onTextLayout}>
              {subTitleText[index]}
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: viewSize ? viewSize.x + 14 : 0,
                left: textSize ? textSize.width - 45 : 0,
              }}
              onPress={handleDialog}
            >
              <Feather name="info" size={11} color="#222222" />
            </TouchableOpacity>
          </View>

          <FloatingDialog
            ref={floatingDialogRef}
            posX={viewSize ? viewSize.y + viewSize.height : 0}
            posY={textSize ? textSize.width - 30 : 0}
            content={
              <Text>
                {dialogInfoText[index]}
                <Text
                  style={{ color: "blue" }}
                  onPress={() => Linking.openURL("wakala.xyz/fees.")}
                >
                  {dialogInfoLink[index]}.
                </Text>
              </Text>
            }
          />

          <TouchableOpacity onPress={clickNext}>
            <ProgressCircle
              value={index / 4}
              size={70}
              thickness={4}
              color="#4840BB"
              unfilledColor="#E5E5E5"
              animationMethod="spring"
              animationConfig={{ speed: 4 }}
            >
              <LinearGradient
                colors={["rgba(183, 0, 76, 0.3)", "rgba(19, 63, 219, 1)"]}
                style={styles.button}
              >
                <Feather name="arrow-right" size={24} color="white" />
              </LinearGradient>
            </ProgressCircle>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenCmpt>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "space-around",
    alignItems: "center",
  },

  menu: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },

  wrapper: {
    flex: height > 460 ? 0.5 : 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },

  image: {
    height: 150,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
    marginBottom: 40,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#4840BB",
    lineHeight: 28.44,
    fontFamily: "Rubik_400Regular",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#1C1939CC",
    lineHeight: 19.36,
    paddingHorizontal: 30,
    fontFamily: "Inter_400Regular",
  },

  button: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 10,
    height: 50,
    width: 50,
    marginTop: 10,
  },

  dialogContainer: {
    width: SIZES.width * 0.8,
    height: 200,
    position: "absolute",
  },

  dialogText: {
    position: "relative",
  },
});

export default CardInfo;
