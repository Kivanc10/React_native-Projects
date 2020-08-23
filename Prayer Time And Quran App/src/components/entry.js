import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList,TouchableOpacity ,ScrollView} from "react-native";
import { connect } from "react-redux";
import SureList from "./sureList";
import {Header} from "./common/header";

class Entry extends Component {
    renderItem({ item }) {
        return (
           <SureList book={item} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Namaz Sureleri" />
               <View style={{padding:15,paddingBottom:20,flex:1}}>
               <FlatList
                    data={this.props.sureler}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.isbn}
                />
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

const mapStateToProps = (state) => {
    return {
        sureler: state.sureler
    }
}

export default connect(mapStateToProps)(Entry);