import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import PINInterface from "../../components/PINInterface";
import {LinearGradient} from "expo-linear-gradient";
import HeaderTitle from "../../components/HeaderTitle";
import PINCode from '@haskkor/react-native-pincode'
import {COLORS, FONTS, SIZES} from "../../consts/theme";
import ScreenCmpt from "../../components/ScreenCmpt";
import {Ionicons} from "@expo/vector-icons";
import {RFPercentage} from "react-native-responsive-fontsize";

function SetPIN({navigation}) {
    const [pin, setPin] = React.useState("")
    const [title, setTitle] = React.useState("Create a PIN")
    const pinSetCallback = (value) => {
        if(pin !== "" && pin === value){
            navigation.navigate("ConnectPhone")
        }else {
            setPin(value)
            setTitle("Confirm PIN")
        }

    }
    const titleComponent = (props) => {
        console.log(props)
        return(<View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            {/*<View style={{flexDirection: "row", width: '100%', justifyContent: "space-between"}}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{alignSelf: "flex-start"}}>
                    <Ionicons name="chevron-back" style={{fontSize: RFPercentage(3.2), alignSelf: "flex-start"}}
                              color={COLORS.darkBlue}/>
                </TouchableOpacity>
            </View>*/}

            <Text style={{...styles.title}}>
                {title}
            </Text>
        </View>)
    }
    return (
        <ScreenCmpt>
                <View style={styles.wrapper}>
                    <PINCode status={'choose'}
                             stylePinCodeTextTitle={styles.title}
                             stylePinCodeColorTitle={COLORS.primary}
                             titleChoose={"Enter a PIN"}
                             titleConfirm={"Confirm your PIN code"}
                             buttonDeleteText=""
                             subtitleChoose=""
                             passwordLength={6}
                             pinCodeVisible={true}
                             finishProcess={() => navigation.navigate("ConnectPhone")} />
                </View>
        </ScreenCmpt>

    );
}
let keyWidth = SIZES.width * 0.25;
let keyHeight = keyWidth * 0.75;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 28,
        color: "#4840BB",
        lineHeight: 28.44,
        fontFamily: "Rubik_500Medium",
        width: 240,
        alignSelf: "flex-start",
        paddingTop: 30,
        textAlign: 'center'
    },
});


export default SetPIN;