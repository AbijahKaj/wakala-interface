import React, { Component } from 'react';
import {
    StyleSheet,   // CSS-like styles
    Text,         // Renders text
    View,          // Container component
    Image
} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from '../../components/Swiper';
import {SLIDER_IMAGE_001, SLIDER_IMAGE_002, SLIDER_IMAGE_003, SLIDER_IMAGE_004} from "../../assets/images";
import appTheme, {COLORS, SIZES} from "../../consts/theme";

export default class OnboardingScreen extends Component {
    render() {
        return (
            <Swiper navigation={this.props.navigation}>
                {/* First screen */}
                <View style={styles.slide}>
                    <Image source={SLIDER_IMAGE_001} style={styles.image} />
                    <Text style={styles.header}>Easy</Text>
                    <Text style={styles.text}>Wakala makes it easy for you to top up your cUSD wallet. Both Add or withdraw cUSD</Text>
                </View>
                {/* Second screen */}
                <View style={styles.slide}>
                    <Image source={SLIDER_IMAGE_002} style={styles.image} />
                    <Text style={styles.header}>Community</Text>
                    <Text style={styles.text}>Wakala is a community, owned by its members.</Text>
                </View>
                {/* Third screen */}
                <View style={styles.slide}>
                    <Image source={SLIDER_IMAGE_003} style={styles.image} />
                    <Text style={styles.header}>Speed</Text>
                    <Text style={styles.text}>Post a request, will get answered SUPER FAST, by community agent.</Text>
                </View>
                <View style={styles.slide}>
                    <Image source={SLIDER_IMAGE_004} style={styles.image} />
                    <Text style={styles.header}>Earn</Text>
                    <Text style={styles.text}>Want to be a community yourself? Fullfill requests and earn commissions. the faster you fulfill, the more you earn.</Text>
                </View>
            </Swiper>
        );
    }
}

const iconStyles = {
    size: 100,
    color: '#FFFFFF',
};

const styles = StyleSheet.create({
    // Slide styles
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally

    },
    // Header styles
    header: {
        color: COLORS.primary,
        fontFamily: 'Avenir',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    image: {
        height: 250,
        maxWidth: SIZES.width*0.8,
        resizeMode: "contain",
        //marginLeft: 20
    },
    // Text below header
    text: {
        color: appTheme.COLORS.textBlack,
        fontFamily: 'Avenir',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'center',
        marginBottom: 80
    },
});