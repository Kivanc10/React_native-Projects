import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      input1:'',
      input2:''
    }
    this.sum=this.sum.bind(this);//bağla
    this.deduct=this.deduct.bind(this);
    this.mult=this.mult.bind(this);
    this.div=this.div.bind(this);
  }
sum() {
    const num1=parseInt(this.state.input1);
    const num2=parseInt(this.state.input2);
    const result = num1+num2;
    this.setState({
      result:result
    })
  }
  deduct() {
    const num1=parseInt(this.state.input1);
    const num2=parseInt(this.state.input2);
    const result = num1-num2;
    this.setState({
      result:result
    })
  }
  mult() {
    const num1=parseInt(this.state.input1);
    const num2=parseInt(this.state.input2);
    const result = num1*num2;
    this.setState({
      result:result
    })
  }
  div() {
    const num1=parseInt(this.state.input1);
    const num2=parseInt(this.state.input2);
    const result = num1/num2;
    this.setState({
      result:result
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Simple Calculator</Text>
      </View>
      <View style={styles.contentWrapper}>

      <TextInput style={styles.input}
      placeholder="First number"
      onChangeText={(text)=>{
        this.setState({
          input1:text
        })
      }}
      value={this.state.input1}
      />
      <View style={styles.buttonWrapper}>
      <Button
          title=" + "
          onPress={this.sum}

        />
        <Button
            title=" - "
            onPress={this.deduct}

          />
          <Button
              title=" * "
              onPress={this.mult}

            />
            <Button
                title=" / "
                  onPress={this.div}

              />
      </View>

      <TextInput style={styles.input}
      placeholder="Second number"
      onChangeText={(text)=>{
        this.setState({
          input2:text
        })
      }}
      value={this.state.input2}
      />
      <Text style={styles.sampleText}>Result :{this.state.result}</Text>


      </View>
      </View>

    );

  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column"
  },
  contentWrapper:{
    padding:20,
    flexDirection:"column",
    justifyContent:"center"
  },
  header:{
    height:80,
    paddingTop:30,
    shadowColor:"#000000",
    shadowOffset:{width:3,height:2},
    shadowOpacity:0.5,
    justifyContent:"center",
    backgroundColor:"#a9a9a9"
  },
  headerText:{
    justifyContent:"center",
    alignItems:"center",
    top:-10,
    left:140,
    color:"white",
    fontWeight:"bold"
  },

  input:{
    height:40,

  },
  sampleText:{
    height:30,
    fontSize:15,
    paddingTop:10
  },
  buttonWrapper:{
    flexDirection:"row",
    justifyContent:"space-around",
    paddingTop:20,
    margin:25

  }


})
