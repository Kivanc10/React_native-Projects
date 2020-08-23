import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, WebView, ImageBackground } from "react-native";
import { Card } from "./common/card";
import { selectBook, deselectBook } from "../actions";
import { connect } from "react-redux";
import { Video } from 'expo-av';

class SureList extends Component {
    onPressed() {
        const { book, selected } = this.props;
        selected ? this.props.deselectBook() :
            this.props.selectBook(book);
    }
    render() {
        const { book, selected } = this.props;
        const descpritionField = selected ? (
            <View style={styles.description}>
                <View style={styles.show}>
                    <Text style={styles.head}>Anlam</Text>
                    <Text style={styles.descAnlam}>{book.anlam}</Text>
                </View>
                <View style={styles.show}>
                    <Text style={styles.head}>Okunuş</Text>
                    <Text style={styles.descAnlam}>{book.okunus}</Text>
                    <View style={{padding : 20,justifyContent : "center",alignItems : "center"}}>
                    <Video
                        source={{ uri: book.adres }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="stretch"                      
                        shouldPlay
                        isLooping
                        style={{ width: 300, height: 300, flex: 1 ,marginLeft:20,paddingTop:10}}
                    />
                    </View>
                </View>
            </View>
        ) : null;

        const image = { uri: "https://thumbs.dreamstime.com/b/islamic-star-pattern-background-golden-lines-white-45762815.jpg" };
        return (
            <TouchableOpacity onPress={this.onPressed.bind(this)}>
                <View style={{ flex: 1 }}>                   
                        <Card>
                            <Text style={styles.titleStyle}>{book.name}</Text>
                            <Text style={styles.detailStyle}>{book.arapca}</Text>
                        </Card>                   
                </View>
                {descpritionField}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: "black",
        fontSize: 15,
        paddingBottom: 10
    },
    detailStyle: {
        color: "gray",
        fontSize: 15
    },
    description: {
        flex: 1,
        justifyContent: "center",
        padding: 10,

    },
    descAnlam: {
        textAlign: "justify"
    },
    show: {
        borderBottomWidth: 1,
        padding: 10
    },
    head: {
        fontSize: 15,
        color: "red",
        paddingBottom: 10
    },
    WebViewContainer: {
        marginTop: 20
    }
})

const mapStateToProps = (state, props) => {
    console.log(state);
    const selected = state.selectedSurah
        && state.selectedSurah.isbn === props.book.isbn
    return {
        selected
    }
}

export default connect(mapStateToProps, { selectBook, deselectBook })(SureList);