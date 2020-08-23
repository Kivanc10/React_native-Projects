import React, { Component } from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from "react-native";
import { Card } from "./common/card";
import { Header } from "./common/header";


class Detail extends Component {
    yasinRender() {
        return (
            <View style={{ flex: 1 ,paddingBottom : 25}}>
                <Image style={styles.imageStyle} source={require("../../assets/yasin1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/yasin2.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/yasin3.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/yasin4.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/yasin5.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/yasin6.jpg")} />
            </View>
        )
    }
    mulkRender() {
        return (
            <View style={{ flex: 1 ,paddingBottom : 25}}>
                <Image style={styles.imageStyle} source={require("../../assets/mulk1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/mulk2.jpg")} />
                <Image style={styles.imageStyleDiff} source={require("../../assets/mulk3.jpg")} />              
            </View>
        )
    }
    ammeRender() {
        return (
            <View style={{ flex: 1,paddingBottom : 25}}>
                <Image style={styles.imageStyle} source={require("../../assets/amme1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/amme2.jpg")} />
            </View>
        )
    }
    vakiaRender() {
        return (
            <View style={{ flex: 1 ,paddingBottom : 25}}>
                <Image style={{width:345,height:400}} source={require("../../assets/vakia1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/vakia2.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/vakia3.jpg")} />
                <Image style={{width:345,height:500}} source={require("../../assets/vakia4.jpg")} />
            </View>
        )
    }
    kiyametRender() {
        return (
            <View style={{ flex: 1,paddingBottom : 25}}>
                <Image style={styles.imageStyle} source={require("../../assets/kiyamet1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/kiyamet2.jpg")} />
            </View>
        )
    }
    fetihRender() {
        return (
            <View style={{ flex: 1 ,paddingBottom : 25}}>
                <Image style={styles.imageStyle} source={require("../../assets/fetih1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/fetih2.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/fetih3.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/fetih4.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/fetih5.jpg")} />
            </View>
        )
    }
    rahmanRender() {
        return (
            <View style={{ flex: 1 ,paddingBottom : 25}}>
                <Image style={{width:325,height:400}} source={require("../../assets/rahman1.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/rahman2.jpg")} />
                <Image style={styles.imageStyle} source={require("../../assets/rahman3.jpg")} />
                <Image style={{width:325,height:250}} source={require("../../assets/rahman4.jpg")} />
            </View>
        )
    }
    duhanRender() {
        return (
            <View style={{ flex: 1 ,paddingBottom : 25}}>
                <Image style={styles.imageStyles} source={{uri : "https://dinirehberim.com/wp-content/uploads/2017/04/496.jpg"}} />
                <Image style={styles.imageStyles} source={{uri : "https://dinirehberim.com/wp-content/uploads/2017/04/497.jpg"}} />
                <Image style={styles.imageStyles} source={{uri : "https://dinirehberim.com/wp-content/uploads/2017/04/498.jpg"}} />
            </View>
        )
    }
    render() {
        const date = new Date();
        const image = { uri: "https://lh3.googleusercontent.com/proxy/gJZOsqxEDgi790urVcjuI36R1yyJKjB8ScqzRJrSLx17wARqz7HEatBPCSuq709Ej4VfMwv0O36--HiXEjTap_rDHylyE0GG7oXAYaBU7iY56C9lL73KAhBECRSyWs-fuJYpIckYTbvODDuTSK6jlQ3Wq-FMwDUVtGltuxgghtEq9A0Ox52b9uvT_Qt1fM_-dPACFy36yXsVPtTh0ludluy5pZYBHHUS0n9ID9OLNKBSH31j6vIRFp4XBt-eeEKwNP1kFnVNRoD6hPSOePLe_a-nHspgYgdSUW6vH5yk4GMGA3uME7IUhj55crymZcfZWA" };
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={image} style={{ flex: 1 }}>
                    <ScrollView>
                        <Header headerText="Belirli Sureler" />
                        <TouchableOpacity style={{ paddingTop: 50 }}>
                            <Card>
                                <Text style={styles.textStyle}>Yasin Suresi</Text>
                            </Card>
                            {this.yasinRender()}
                            <Card>
                                <Text style={styles.textStyle}>Mülk Suresi</Text>
                            </Card>
                            {this.mulkRender()}
                            <Card>
                                <Text style={styles.textStyle}>Amme Suresi</Text>
                            </Card>
                            {this.ammeRender()}
                            <Card>
                                <Text style={styles.textStyle}>Vakia Suresi</Text>
                            </Card>
                            {this.vakiaRender()}
                            <Card>
                                <Text style={styles.textStyle}>Kıyamet Suresi</Text>
                            </Card>
                            {this.kiyametRender()}
                            <Card>
                                <Text style={styles.textStyle}>Fetih Suresi</Text>
                            </Card>
                            {this.fetihRender()}
                            <Card>
                                <Text style={styles.textStyle}>Rahman Suresi</Text>
                            </Card>
                            {this.rahmanRender()}
                            <Card>
                                <Text style={styles.textStyle}>Duhan Suresi</Text>
                            </Card>
                            {this.duhanRender()}
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: "tomato",
        fontSize: 30,
        fontWeight: "bold"
    },
    imageStyle: {
        width: 355,
        height: 690
    },
    imageStyleDiff : {
        width: 340,
        height: 200
    },
    imageStyles : {
        width: 355,
        height: 600
    }
})

export default Detail;