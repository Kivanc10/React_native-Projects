import React, { Component } from "react";
import { Text, View, StyleSheet, Button, FlatList, Image, TouchableOpacity, Picker, ScrollView } from "react-native";
import { Header } from "./common/header";
import { Card } from "./common/card";
import { connect } from "react-redux";
import axios from "axios";



class NamazSaati extends Component {
    state = {
        city: [],
        selectedValue: 500,
        selectedValue2: "",
        district: [],
        vakitId: "",
        times: []
    }
    getData() {
        fetch("https://ezanvakti.herokuapp.com/sehirler?ulke=2")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    city: json
                })
            })
            .catch((error) => {
                alert("Biraz sonra tekrar deneyin");
            })
    }

    getDistrict(index) {
        fetch(`https://ezanvakti.herokuapp.com/ilceler?sehir=${(500+index)}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    district: json
                })
            })
            
    }
    getTime(index) {
        fetch(`https://ezanvakti.herokuapp.com/vakitler?ilce=${index}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    times: json
                })
            })
    }

    renderItem({ item }) {
        return (            
                <ScrollView>
                    <Card>                   
                    <Text style={styles.vakitStyle}>Miladi Tarih : {item.MiladiTarihUzun}</Text>
                    <Text style={styles.vakitStyle}>Hicri Tarih : {item.HicriTarihUzun}</Text>
                    <Text style={styles.vakitStyle}>İmsak : {item.Imsak}</Text>
                    <Text style={styles.vakitStyle}>Güneş : {item.Gunes}</Text>
                    <Text style={styles.vakitStyle}>Güneş Doğuş : {item.GunesDogus}</Text>
                    <Text style={styles.vakitStyle}>Öğle : {item.Ogle}</Text>
                    <Text style={styles.vakitStyle}>İkindi : {item.Ikindi}</Text>
                    <Text style={styles.vakitStyle}>Akşam : {item.Aksam}</Text>
                    <Text style={styles.vakitStyle}>Yatsı : {item.Yatsi}</Text>
                    <Text style={styles.vakitStyle}>Ayın şekli :</Text>
                    <Image style={{ width: 66, height: 58, }} source={{ uri: item.AyinSekliURL }} />                   
                </Card>
                </ScrollView>
          )
    }
    componentDidMount() {
        this.getData();
        this.getDistrict(this.state.selectedValue);
        this.getTime(this.state.selectedValue2);
    }

    render() {
        let optionNames = this.state.city.map((myValue,index) => {
            return (
                <Picker.Item label={myValue.SehirAdi} value={index} key={index} />
            )
        })
        let districtNames = this.state.district.map((myValue) => {
            return (
                <Picker.Item label={myValue.IlceAdi} value={myValue.IlceID} key={myValue.IlceID} />
            )
        })
 
        return (
            <View>

                <Header headerText="Namaz Saatleri" />
                <Picker
                    selectedValue={this.state.selectedValue}
                    onValueChange={(value) => this.setState({ selectedValue: value })}
                >
                    {optionNames}
                </Picker>
                <Button color="blue"
                    onPress={() => this.getDistrict(this.state.selectedValue)}
                    title="ilçeleri göster" />
                <Picker
                    selectedValue={this.state.selectedValue2}
                    onValueChange={(value) => this.setState({ selectedValue2: value })}
                >
                    {districtNames}
                </Picker>
                <Button color="blue"
                    onPress={() => this.getTime(this.state.selectedValue2)}
                    title="Vakitleri göster" />
                    <View style={{paddingBottom :500,margin : 20}}>
                    <FlatList
                        renderItem={this.renderItem}
                        data={this.state.times}
                        keyExtractor={(item) => item.Yatsi} />  
                    </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    vakitStyle: {
        fontSize: 15
    }
})

export default NamazSaati;