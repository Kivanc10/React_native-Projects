import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";


const AboutMe = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.entry}>
                    <Text style={styles.text}>Bu uygulama bizim atılım ve üretim yolculuğumuzdaki ilk ürün , o nedenle bizim için ayrı bir önem taşıyor.</Text>
                    <Text style={styles.text}>Gelişen teknoloji ve kolay hizmet sağlayana yönelim doğrultusunda, insanların en kolay biçimde faydalanacakları anlık döviz ve altın alış-satış endekslerini ekrana getiren uygulama ile geliştirme dünyasına adım atmış bulunuyoruz.</Text>
                    <Text style={styles.text}>Ayrıca uygulamamız , Euro bazında döviz hesaplayıcı barındırarak ,dinamik uygulama dünyasında ivme kazanıyor</Text>
                    <Text style={styles.text}>Bu uygulama hakkındaki yorumlarınız , gelişme yolundaki ekibimize rehber olacaktır.</Text>
                </View>               
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate("Doviz")}
                        title="Ana Sayfaya Git"
                        color="rgb(169,169,169)"
                    />
                </View>
                <View style={styles.result}>
                    <Text style={styles.lasttext}>Uygulama Geliştiricisi : Kıvanç Aydoğmuş</Text>
                    <Text style={styles.email}>kvncaydogmus@gmail.com</Text>
                </View>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(0,128,128)",
        paddingTop: 10
    },
    entry: {
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
        flex: 9,
    },
    text: {
        fontSize: 20,
        marginTop: 15,
        color: "rgb(255,228,196)",
        textAlign: "justify"
    },
    button: {
        margin: 10,
        flex: 1,
        marginBottom : -10
    },
    wrapper: {
        flex: 1,
        flexDirection: "column"
    },
    result: {
        flex: 1,
        flexDirection : "row",
        marginBottom : 5,
        marginBottom : -20
    },
    lasttext : {
        flexGrow : 1,
        fontSize : 10,
        color : "rgb(255,228,181)"
    },
    email : {
        flexGrow : 1,
        fontSize : 10,
        color : "rgb(255,228,181)"
    }

})

export default AboutMe;