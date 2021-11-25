import React from 'react';
import {View, StyleSheet} from 'react-native'
import PINCode from '@haskkor/react-native-pincode'
import {COLORS, FONTS, SIZES} from "../../consts/theme";
import ScreenCmpt from "../../components/ScreenCmpt";

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