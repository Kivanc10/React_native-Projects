import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import axios from "axios";

class Golds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gr: [],
            ceyrek: [],
            yarim: [],
            tam: [],
            cumhuriyet: [],
            ata: [],
            resat: [],
            hamit: [],
            ayar14: [],
            ayar18: [],
            ayar22: [],
            besli: [],
            ikibucuk: [],
            gumus: [],
            gremse: []
        }
    }
    async componentDidMount() {
        axios.get("https://finans.truncgil.com/today.json")
            .then((res) => {
                this.setState({
                    gr: res.data["Gram Altın"],
                    ceyrek: res.data["Çeyrek Altın"],
                    yarim: res.data["Yarım Altın"],
                    tam: res.data["Tam Altın"],
                    cumhuriyet: res.data["Cumhuriyet Altını"],
                    ata: res.data["Ata Altın"],
                    resat: res.data["Reşat Altın"],
                    hamit: res.data["Hamit Altın"],
                    ayar14: res.data["14 Ayar Altın"],
                    ayar18: res.data["18 Ayar Altın"],
                    ayar22: res.data["22 Ayar Bilezik"],
                    besli: res.data["Beşli Altın"],
                    ikibucuk: res.data["İkibuçuk Altın"],
                    gumus: res.data["Gümüş"],
                    gremse: res.data["Gremse Altın"]
                })
            })
        
    }
    render() {
        const { gr, ceyrek, yarim, tam, cumhuriyet, ata, resat, hamit, gumus, ayar14, ayar18, ayar22, besli, ikibucuk, gremse } = this.state;

        return (
            <View style={styles.container}>               
                <View style={styles.entry}>
                    <Image style={styles.logo} source={require("../../assets/gold.png")} />
                </View>
                <ScrollView>
                    <View style={styles.result}>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Gümüş Alış : {gumus["Alış"]}</Text>
                            <Text style={styles.gold}>Gümüş Satış : {gumus["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>14 Ayar Altın Alış : {ayar14["Alış"]}</Text>
                            <Text style={styles.gold}>14 Ayar Altın Satış : {ayar14["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>18 Ayar Altın Alış : {ayar18["Alış"]}</Text>
                            <Text style={styles.gold}>18 Ayar Altın Satış : {ayar18["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>22 Ayar Altın Alış : {ayar22["Alış"]}</Text>
                            <Text style={styles.gold}>22 Ayar Altın Satış : {ayar22["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Gram Altın Alış : {gr["Alış"]}</Text>
                            <Text style={styles.gold}>Gram Altın Satış : {gr["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Çeyrek Altın Alış : {ceyrek["Alış"]}</Text>
                            <Text style={styles.gold}>Çeyrek Altın Satış : {ceyrek["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Tam Altın Alış : {tam["Alış"]}</Text>
                            <Text style={styles.gold}>Tam Altın Satış : {tam["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Ata Altını Alış : {ata["Alış"]}</Text>
                            <Text style={styles.gold}>Ata Altını Satış : {ata["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Cumhuriyet Altını Alış : {cumhuriyet["Alış"]}</Text>
                            <Text style={styles.gold}>Cumhuriyet Altını Satış : {cumhuriyet["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Reşat Altını Alış : {resat["Alış"]}</Text>
                            <Text style={styles.gold}>Reşat Altını Satış : {resat["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Hamit Altını Alış : {hamit["Alış"]}</Text>
                            <Text style={styles.gold}>Hamit Altını Satış : {hamit["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>İkibuçuk Altın Alış : {ikibucuk["Alış"]}</Text>
                            <Text style={styles.gold}>İkibuçuk Altın Satış : {ikibucuk["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Gremse Altın Alış : {gremse["Alış"]}</Text>
                            <Text style={styles.gold}>Gremse Altın Satış : {gremse["Satış"]}</Text>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={styles.gold}>Beşli Altın Alış : {besli["Alış"]}</Text>
                            <Text style={styles.gold}>Beşli Altın Satış : {besli["Satış"]}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    currencyRates: {
        fontSize: 15
    },
    wrapper: {
        borderWidth: 1,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderColor: "rgb(220,20,60)"
    },
    gold: {
        fontSize: 20,
        color: "white"
    },
    entry: {
        height: 240,
        backgroundColor: "rgb(220,20,60)",
        justifyContent: "center",
        alignItems: "center"
    },
    result: {
        flex: 1
    },
    logo: {
        flex: 1,
        height: 300,
        width: 300
    },
    container: {
        flex: 1,
        backgroundColor: "rgb(222,184,135)",
        flexDirection: "column"
    }
})

export default Golds;