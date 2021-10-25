import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const SignUpScreen = ({ onSignUP }) => {
    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Button title="Sign Up" onPress={onSignUP} />
        </View>
    );
};

export default SignUpScreen;