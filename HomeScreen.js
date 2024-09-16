import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import Verification from "./Verification";

export default function HomeScreen() {
    const [number, setNumber] = React.useState('');

    const handleVerification = () => {
        console.log('Number: ', number);
        if (number == number){
            return(
                <Verification/>
            );
        }        
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>Enter your number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber}
                    value={number}
                    placeholder="Example: 980828693"
                    keyboardType="numeric"
                    maxLength={10}
                />
                <TouchableOpacity style={[styles.button, styles.verificationButton]} onPress={handleVerification}>
                    <Text style={styles.buttonText}>Continue to verification</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    By signing up you agree to our{'\n'}
                    Terms & Conditions, acknowledge our{'\n'}
                    Privacy Policy, and confirm that you're over 18.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333', 
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        marginTop: 5,
    },    
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    verificationButton: {
        backgroundColor: '#8DBA76',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    footerText: {
        textAlign: "center",
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
    }
    });