import { View, Image, StyleSheet } from "react-native";
import Icon from "./assets/splash.png";

export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <View>
                <Image source={Icon} style={styles.image}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8DBA76"
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "",
    }
});