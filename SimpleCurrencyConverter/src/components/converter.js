import React,{Component} from "react";
import {Text,View,StyleSheet,TextInput,Button} from "react-native";
import {connect} from "react-redux";
import {getRates} from "../actions";


class Converter extends Component{
  constructor(props){
    super(props);
    this.state = {
      tl: '',
      usd: '',
      cad: '',
      jpy: '',
      eur: '',
      input: '',
    }
  }
  componentDidMount(){
    console.log("componentDidMount")
    console.log(this.props.getRates());
    console.log("props ==>");
    console.log(this.props);

  }
  onChangeRates(text){
    const i = parseFloat(text) || 0;
    const {input,tl,usd,cad,jpy,eur} = this.state;
    const {rates} = this.props;
    this.setState({
      input : text,
      tl: (i * rates['TRY']).toFixed(3),
      usd: (i * rates['USD']).toFixed(3),
      cad: (i * rates['CAD']).toFixed(3),
      jpy: (i * rates['JPY']).toFixed(3),
      eur: (i * rates['EUR']).toFixed(3)
    })
  }

  onPressed(){
    const {input,tl,cad,eur,usd,jpy} = this.state;
    this.setState({
      input : "",
      tl : "",
      cad : "",
      eur : "",
      usd : "",
      jpy : ""
    })
  }

  render(){
    const {input,tl,usd,cad,jpy,eur} = this.state;
    const {rates} = this.props;
    return (
      <View>
      <View style = {styles.inputStyle}>
        <TextInput
        style = {styles.textInputStyle}
        placeholder = "Enter EUR"
        onChangeText = {this.onChangeRates.bind(this)}
        keyboardType = "numeric"
        value = {this.state.input}
        />
      </View>
      <View style = {styles.contentWrapper}>
        <Text style = {styles.textStyle}>TR : {tl}</Text>
        <Text style = {styles.textStyle}>EUR : {eur}</Text>
        <Text style = {styles.textStyle}>USD : {usd}</Text>
        <Text style = {styles.textStyle}>CAD : {cad}</Text>
        <Text style = {styles.textStyle}>JPY : {jpy}</Text>
      </View>
      <Button
      title = "Clear"
      color = "rgb(255,105,98)"
      onPress = {this.onPressed.bind(this)}
      />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {rates} = state.rates;
  return {
    rates
  }
}

const styles = StyleSheet.create({
  inputStyle : {
    height : 70,
    padding : 10,
    alignItems : "center",
    margin : 20,
    fontSize : 30,
    backgroundColor : "rgb(255,105,98)"
  },
  textStyle : {
    marginTop : 35,
    fontSize : 25,
    color : "rgb(255,105,98)"

  },
  contentWrapper : {
    height : 400,
    marginLeft : 40,

  },
  textInputStyle : {
    fontSize : 20,
    paddingTop : 15
  }

})

export default connect(mapStateToProps,{getRates})(Converter);
