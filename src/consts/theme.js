import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#4840BB",
    secondary: "#B0F623",   // gray

    mainGray: "#B3B3B3",
    backgroundColor: "#E5E5E5",

    // colors
    black: "#181725",
    textBlack: "#1C1939CC",
    white: "#FFFFFF",
    tertiary: "#7C7C7C",
    realBlack: "#000000",
    buttonGray: "#E6E6E6",

    //Menu
    homeMenu: "rgba(162, 197, 93, 0.15)",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55, fontFamily: "Rubik" },
    h1: { fontSize: SIZES.h1, lineHeight: 36, fontFamily: "Rubik" },
    h2: { fontSize: SIZES.h2, lineHeight: 30, fontFamily: "Rubik" },
    h3: { fontSize: SIZES.h3, lineHeight: 22, fontFamily: "Rubik" },
    h4: { fontSize: SIZES.h4, lineHeight: 22, fontFamily: "Rubik" },
    body1: { fontSize: SIZES.body1, lineHeight: 36, fontFamily: "Rubik" },
    body2: { fontSize: SIZES.body2, lineHeight: 30, fontFamily: "Rubik" },
    body3: { fontSize: SIZES.body3, lineHeight: 22, fontFamily: "Rubik" },
    body4: { fontSize: SIZES.body4, lineHeight: 22, fontFamily: "Rubik" },
    body5: { fontSize: SIZES.body5, lineHeight: 22, fontFamily: "Rubik" },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
