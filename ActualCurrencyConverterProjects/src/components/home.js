import React, { Component } from 'react';
import { StyleSheet,Platform, Text, View, Image, TextInput, ScrollView, SafeAreaView, Button } from 'react-native';
import axios from "axios";


class Home extends Component {
  constructor(props) {
    // android banner  ca-app-pub-7845548592670563/8766580682
    super(props);
    this.state = {
      BHD: "",
      CAD: "",
      EUR: "",
      GBP: "",
      JOD: "",
      JPY: "",
      KWD: "",
      KYD: "",
      TRY: "",
      OMR: "",
      CHF: "",
      LYD: "",
      AZN: "",
      AUD: "",
      input: "",
      USD: "",
      BGN : "",
      RUB : "",
      QAR : "",
      IRR : "",
      CNY : "",
      rates: []
    }
  }

  async componentDidMount() {
    axios.get("http://data.fixer.io/api/latest?access_key=f6faff1af62a19ab04c8173da40d7664&symbols=EUR,TRY,USD,CAD,JPY,KWD,GBP,BHD,KYD,JOD,OMR,CHF,LYD,AZN,AUD,BGN,RUB,QAR,IRR,CNY")
      .then((response) => {
        this.setState({
          rates: response.data.rates
        })
      })      
  }


  onChangeRates(text) {
    const i = parseFloat(text) || 0;
    const { BHD, CAD, EUR, GBP, JOD, JPY, KWD, KYD, TRY, rates, USD, input } = this.state;
    this.setState({
      input: text,
      BHD: (i * rates["BHD"]).toFixed(3),
      CAD: (i * rates["CAD"]).toFixed(3),
      EUR: (i * rates["EUR"]).toFixed(3),
      USD: (i * rates["USD"]).toFixed(3),
      GBP: (i * rates["GBP"]).toFixed(3),
      JOD: (i * rates["JOD"]).toFixed(3),
      JPY: (i * rates["JPY"]).toFixed(3),
      KWD: (i * rates["KWD"]).toFixed(3),
      KYD: (i * rates["KYD"]).toFixed(3),
      OMR: (i * rates["OMR"]).toFixed(3),
      CHF: (i * rates["CHF"]).toFixed(3),
      LYD: (i * rates["LYD"]).toFixed(3),
      AZN: (i * rates["AZN"]).toFixed(3),
      AUD: (i * rates["AUD"]).toFixed(3),
      TRY: (i * rates["TRY"]).toFixed(3),
      BGN: (i * rates["BGN"]).toFixed(3),
      RUB: (i * rates["RUB"]).toFixed(3),
      QAR: (i * rates["QAR"]).toFixed(3),
      IRR: (i * rates["IRR"]).toFixed(3),
      CNY: (i * rates["CNY"]).toFixed(3),
    })
  }

  render() {
    const { BHD, CAD, EUR, GBP, JOD, JPY, KWD, KYD, TRY, OMR, CHF, LYD, AZN, AUD,USD,BGN,RUB,QAR,IRR,CNY } = this.state;
    return (
      <View style={styles.container}>        
        <View style={styles.imageField}>
          <Image source={require("../../assets/imageField.png")} style={styles.logo} />
        </View>
        <View style={styles.inputFiled}>
          <TextInput
            placeholder="Euro cinsinden girin"
            keyboardType="numeric"
            onChangeText={this.onChangeRates.bind(this)}
            style={styles.inputStyle}
            value={this.state.input}
          />
        </View>
        <SafeAreaView style={styles.resultField}>
          <ScrollView>
            <Text style={styles.textStyle}><Image source={require("../../assets/turkey.png")} style={styles.flagStyle} /> Türk Lirası : {TRY}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/world.png")} style={styles.flagStyle} /> Avrupa Euro : {EUR}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/usa1.png")} style={styles.flagStyle} /> Amerikan Doları : {USD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/canada.png")} style={styles.flagStyle} /> Kanada Doları : {CAD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/uk.png")} style={styles.flagStyle} /> İngiliz Sterlini : {GBP}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/jordan.png")} style={styles.flagStyle} /> Ürdün Dinarı : {JOD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/kuwait.png")} style={styles.flagStyle} /> Kuveyt Dinarı : {KWD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/cayman-islands.png")} style={styles.flagStyle} /> Cayman Adası Doları : {KYD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/bahrain.png")} style={styles.flagStyle} /> Bahreyn Dinarı : {BHD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/oman.png")} style={styles.flagStyle} /> Umman rialı : {OMR}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/switzerland.png")} style={styles.flagStyle} /> İsviçre Frankı : {CHF}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/libya.jpg")} style={styles.flagStyle} /> Libya dinar : {LYD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/azerbaican.jpg")} style={styles.flagStyle} /> Azerbaycan manatı : {AZN}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/australia.jpg")} style={styles.flagStyle} /> Avustralya doları : {AUD}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/bulgar.png")} style={styles.flagStyle} /> Bulgar Levhası : {BGN}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/rus.png")} style={styles.flagStyle} /> Rus rublesi : {RUB}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/qatar.png")} style={styles.flagStyle} /> Katar Riyali : {QAR}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/iran.png")} style={styles.flagStyle} /> İran Riyali : {IRR}</Text>
            <Text style={styles.textStyle}><Image source={require("../../assets/china.png")} style={styles.flagStyle} /> Çin Yuanı : {CNY}</Text>
          </ScrollView>
        </SafeAreaView>
        <View style={{ padding: 15,marginBottom : 10 }}>
          <Button
            title="Temizle"
            onPress={() => {
              this.setState({
                BHD: "",
                CAD: "",
                EUR: "",
                GBP: "",
                JOD: "",
                JPY: "",
                KWD: "",
                KYD: "",
                TRY: "",
                OMR: "",
                CHF: "",
                LYD: "",
                AZN: "",
                AUD: "",
                input: "",
                USD: "",
                BGN : "",
                RUB : "",
                QAR : "",
                IRR : "",
                CNY : "",
                input: "",
              })
            }}
            color="gray"
          />
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C34"
  },
  imageField: {
    backgroundColor: "#282C34",
    flex: 3,
    paddingTop: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  inputFiled: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "red",
    marginTop : -20,
  },
  resultField: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "#282C34",
    flex: 5,
    paddingTop: 10,

  },
  logo: {
    height: 125,
    width: 125,
    marginTop : -20
  },
  inputFiled: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    paddingTop: 10,
    flexDirection: "row"
  },
  textStyle: {
    justifyContent: "space-between",
    marginTop: 25,
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    color: "white"
  },
  inputStyle: {
    fontSize: 20,
    justifyContent: "center",
    color: "white",
    paddingBottom : 10
  },
  flagStyle: {
    height: 20,
    width: 20
  },
  ads : {
    flex:1,
    justifyContent : "center",
    alignItems : "center"
  }
});




export default Home;