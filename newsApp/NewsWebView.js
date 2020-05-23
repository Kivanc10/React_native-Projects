import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const NewsWebView = ({route}) => {
    const url = route.params && route.params.url;
    return (
        <SafeAreaView style={{flex:1}}>
            <WebView source={{uri : url}}/>
        </SafeAreaView>
    )
}

export default NewsWebView; 