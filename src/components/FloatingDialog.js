import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { SIZES } from "../consts/theme";

import { LinearGradient } from "expo-linear-gradient";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const FloatingDialog = React.forwardRef((props, ref) => {
  const opacity = useSharedValue(0);

  const AnimatedStyles = {
    modal: useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
      };
    }),
    triangle: useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
      };
    }),
  };

  const openDialog = () => {
    opacity.value = withTiming(1);
  };

  const closeDialog = () => {
    opacity.value = withTiming(0);
  };

  React.useImperativeHandle(ref, () => ({ openDialog, closeDialog }));

  return (
    <>
      <Animated.View
        style={[
          AnimatedStyles.triangle,
          { position: "absolute", top: props.posX + 5, left: props.posY + 21 },
        ]}
      >
        <View style={styles.triangle} />
      </Animated.View>
      <AnimatedLinearGradient
        colors={["#F7EFFA", "#FCF8ED"]}
        start={[1, 0]}
        end={[1, 1]}
        style={[
          styles.modal,
          AnimatedStyles.modal,
          { position: "absolute", top: props.posX + 20 },
        ]}
      >
        {props.content}
      </AnimatedLinearGradient>
    </>
  );
});

const styles = StyleSheet.create({
  modal: {
    width: SIZES.width * 0.8,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
    alignItems: "center",
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    zIndex: 5,
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    borderRightWidth: 15,
    borderBottomWidth: 25,
    borderLeftWidth: 15,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#F7EFFA",
    borderLeftColor: "transparent",
  },
});

export default FloatingDialog;
