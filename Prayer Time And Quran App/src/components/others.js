import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Header } from "./common/header";
import { Card } from "./common/card";


class Others extends Component {
    componentDidMount() {
        console.log(this.props.record)
    }
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            lastValue: 0
        }
    }
    add() {
        const { count } = this.state;
        this.setState({
            count: count + 1,
            lastValue: count
        })

    }
    sub() {
        const {record} = this.props;
        const { count } = this.state;
        if (count > 0) {
            this.setState({
                count: count - 1,
                lastValue: count
            })
        }       
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Zikirmatik - Kaza Namazı" />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="-"
                            onPress={this.sub.bind(this)}
                            color="tomato" />
                    </View>
                    <Card>
                        <Text>{this.state.count}</Text>
                    </Card>
                    <View style={styles.button}>
                        <Button title="+"
                            onPress={this.add.bind(this)}
                            color="tomato" />
                    </View>
                </View>
                <View style={{ flex: 1, width: "80%", marginLeft: 40, paddingTop: 20 }}>
                    <Button title="Temizle" onPress={() => this.setState({
                        count: 0
                    })} color="tomato" />
                    <View style={{paddingTop:20,width:"50%",marginTop:20}}>
                    <Text style={{fontWeight:"bold",color:"tomato"}}>Kaydedilen son değer : {this.state.lastValue}</Text>
                    <Button title="Son kaydı sil" color="tomato" onPress={() => this.setState({
                        lastValue : 0
                    })} />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50
    },
    button: {
        height: 100,
        width: 80,
        paddingTop: 40,
        padding: 10
    }
})
const mapStateToProps = (state) => {
    
    return {
        record : state.record
    }
}

export default Others;