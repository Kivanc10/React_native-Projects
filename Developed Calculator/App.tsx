import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

class App extends Component {
  componentDidMount(){
    console.log(this.state);
  }
  constructor() {
    super();
    this.state = {
      resultText: "",
      calculationText : ""
    };
    this.operations = ["DEL",'+', '-', '*', '/'];
  }
calculateResult(){
  let text = this.state.resultText;
  console.log(eval(text));
  this.setState({
      calculationText : eval(text)
  })
}

validate(){
  const text = this.state.resultText;
  switch(text.slice(-1)) {
    case "+":
    case "-":
    case "*":
    case "/":
      return false
  }
  return true
}
  buttonPressed(text) {
    console.log(text);
    if(text=="=") {
      return this.validate() && this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + text
    })
  }

  operate(operation){
    switch(operation) {
      case "DEL":
        let text = this.state.resultText.split("");
        text.pop();
        this.setState({
          resultText : text.join("")
        })
        if(this.state.resultText == ""){
          this.setState({
            calculationText : ""
          })
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        let lastCharacter = this.state.resultText.split("").pop();
        if(this.operations.indexOf(lastCharacter)>0) return
        if(this.state.text=="") return
        this.setState({
          resultText : this.state.resultText + operation
        })
    }
  }
  render() {

    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    let rows = [];
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity key={nums[i][j]} onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }
    let operations = ["DEL",'+', '-', '*', '/'];
    let ops = [];
    for (let i = 0; i < this.operations.length; i++) {
      ops.push(<TouchableOpacity key={this.operations[i]} onPress={() => this.operate(this.operations[i])} style={styles.btn}>
        <Text style={styles.btnText, styles.white}>{this.operations[i]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculation: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    backgroundColor: "rgb(64,64,64)",
    flex: 3
  },
  operations: {
    backgroundColor: "rgb(119,136,153)",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  white: {
    color: "white",
    fontSize: 30
  },
  calculationText: {
    fontSize: 25,
    color: "black",
    marginRight : 15
  },
  resultText: {
    fontSize: 25,
    color: "black",
    marginRight : 15
  },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    fontSize: 30,
    color : "white"
  }
})
export default App;