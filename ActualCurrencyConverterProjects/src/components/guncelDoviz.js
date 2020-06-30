import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native';
import axios from "axios";


class GuncelDoviz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usd : [],
            aud : [],
            dak : [],
            eur : [],
            ster : [],
            frank : [],
            ikron : [],
            cad : [],
            kudin : [],
            norkro : [],
            arabri : [],
            jay : [],
            bulev : [],
            iriyal : [],
            ciyuan : [],
            rupi : [],
            katariy : [],
            ruleyi : [],
            rusrub : []
        }
    }
   async componentDidMount() {
        axios.get("https://finans.truncgil.com/today.json")
        .then((res) => {
            this.setState({
                usd : res.data["ABD DOLARI"],
                aud : res.data["AVUSTRALYA DOLARI"],
                dak : res.data["DANİMARKA KRONU"],
                eur : res.data["EURO"],
                ster : res.data["İNGİLİZ STERLİNİ"],
                frank : res.data["İSVİÇRE FRANGI"],
                ikron : res.data["İSVEÇ KRONU"],
                cad : res.data["KANADA DOLARI"],
                kudin : res.data["KUVEYT DİNARI"],
                norkro : res.data["NORVEÇ KRONU"],
                arabri : res.data["SUUDİ ARABİSTAN RİYALİ"],
                jay : res.data["JAPON YENİ"],
                bulev : res.data["BULGAR LEVASI"],
                iriyal : res.data["İRAN RİYALİ"],
                ciyuan : res.data["ÇİN YUANI"],
                rupi : res.data["PAKİSTAN RUPİSİ"],
                katariy : res.data["KATAR RİYALİ"],
                rusrub : res.data["RUS RUBLESİ"],
                ruleyi : res.data["RUMEN LEYİ"]
            })
        })
    }
    
    render() {
        const {usd,aud,dak,eur,ster,frank,ikron,cad,kudin,norkro,arabri,jay,bulev,iriyal,ciyuan,rupi,katariy,rusrub,ruleyi} = this.state;
        return (
            <View style={styles.container}>             
            <View style={styles.entry}>
                    <Image style={styles.logo} source={require("../../assets/stock-market.png")} />
            </View>            
            <ScrollView>
            <View style={styles.result}>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>ABD DOLARI Alış : {usd["Alış"]}</Text>
            <Text style={styles.gold}>ABD DOLARI Satış : {usd["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>AVUSTRALYA DOLARI Alış : {aud["Alış"]}</Text>
            <Text style={styles.gold}>AVUSTRALYA DOLARI Satış : {aud["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>DANİMARKA KRONU Alış : {dak["Alış"]}</Text>
            <Text style={styles.gold}>DANİMARKA KRONU Satış : {dak["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>EURO Alış : {eur["Alış"]}</Text>
            <Text style={styles.gold}>EURO Satış : {eur["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>İNGİLİZ STERLİNİ Alış : {ster["Alış"]}</Text>
            <Text style={styles.gold}>İNGİLİZ STERLİNİ Satış : {ster["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>İSVİÇRE FRANGI Alış : {frank["Alış"]}</Text>
            <Text style={styles.gold}>İSVİÇRE FRANGI Satış : {frank["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>İSVEÇ KRONU Alış : {ikron["Alış"]}</Text>
            <Text style={styles.gold}>İSVEÇ KRONU Satış : {ikron["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>KANADA DOLARI Alış : {cad["Alış"]}</Text>
            <Text style={styles.gold}>KANADA DOLARI Satış : {cad["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>KUVEYT DİNARI Alış : {kudin["Alış"]}</Text>
            <Text style={styles.gold}>KUVEYT DİNARI Satış : {kudin["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>NORVEÇ KRONU Alış : {norkro["Alış"]}</Text>
            <Text style={styles.gold}>NORVEÇ KRONU Satış : {norkro["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>SUUDİ ARABİSTAN RİYALİ Alış : {arabri["Alış"]}</Text>
            <Text style={styles.gold}>SUUDİ ARABİSTAN RİYALİ Satış : {arabri["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>JAPON YENİ Alış : {jay["Alış"]}</Text>
            <Text style={styles.gold}>JAPON YENİ Satış : {jay["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>BULGAR LEVASI Alış : {bulev["Alış"]}</Text>
            <Text style={styles.gold}>BULGAR LEVASI Satış : {bulev["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>RUMEN LEYİ Alış : {ruleyi["Alış"]}</Text>
            <Text style={styles.gold}>RUMEN LEYİ Satış : {ruleyi["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>RUS RUBLESİ Alış : {rusrub["Alış"]}</Text>
            <Text style={styles.gold}>RUS RUBLESİ Satış : {rusrub["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>İRAN RİYALİ Alış : {iriyal["Alış"]}</Text>
            <Text style={styles.gold}>İRAN RİYALİ Satış : {iriyal["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>ÇİN YUANI Alış : {ciyuan["Alış"]}</Text>
            <Text style={styles.gold}>ÇİN YUANI Satış : {ciyuan["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>PAKİSTAN RUPİSİ Alış : {rupi["Alış"]}</Text>
            <Text style={styles.gold}>PAKİSTAN RUPİSİ Satış : {rupi["Satış"]}</Text>
            </View>
            <View style={styles.wrapper}>
            <Text style={styles.gold}>KATAR RİYALİ Alış : {katariy["Alış"]}</Text>
            <Text style={styles.gold}>KATAR RİYALİ Satış : {katariy["Satış"]}</Text>
            </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    currencyRates : {
        fontSize : 15
    },
   wrapper : {
       borderWidth : 1,
      marginTop : 25,
      justifyContent : "center",
       alignItems : "center",
       borderRadius : 10,
       padding : 10,
       margin : 10,
       borderColor : "rgb(255,160,122)"
   },
   gold : {
       fontSize : 15,
       color : "white"
   },
   entry : {
       height : 240,
       backgroundColor : "rgb(255,160,122)",
       justifyContent : "center",
       alignItems : "center"
   },
   result : {
       flex : 1
   },
   logo : {
    flex : 1,
    height : 240,
    width : 240
   },
   container : {
       flex : 1,
       backgroundColor : "rgb(255,69,0)",
       flexDirection : "column"
   }
})

export default GuncelDoviz;