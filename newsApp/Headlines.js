import { Text, View, SafeAreaView, FlatList, Image, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import prettyTime from "./PrettyTime";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Headlines = ({navigation ,route}) => {
    const [headlines, setHeadlines] = useState({});
    const query = route.params && route.params.category;   
    const language = "tr";
    const API_KEY = "ceac67c5db184b519a28719eab1c7cc2";
    const url = `https://newsapi.org/v2/everything?language=${language}&q=${query}&apiKey=${API_KEY}`;
    useEffect(() => {
        fetcData();
    }, [])
    async function fetcData() {
        (await fetch(url))
            .json()
            .then((res) => {
                console.log(res)
                setHeadlines(res)
            })
    }
    function removeSource(title) {
        if (title == null || title.indexOf("-") < 0) {
            return title;
        }
        var parts = title.split("-");
        parts.pop();
        return parts.join("-");
    }

    function renderItem({ item }) {
        return (
            <TouchableHighlight onPress={() => {navigation.navigate("WebView",{
                url : item.url,title : item.title
            })}}>
                <View style={{ flex: 1, flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{ uri: item.urlToImage }}
                    />
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <Text style={{ flexWrap: "wrap" }}>{removeSource(item.title)}</Text>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="newspaper"
                                    size={15}
                                    style={{ paddingRight: 5 }}
                                />
                                <Text>{item.source.name}</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon
                                    name="clock-outline"
                                    size={15}
                                    style={{ paddingRight: 5 }}
                                />
                                <Text>{prettyTime(item.publishedAt)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    return (
        <SafeAreaView>
            <FlatList
                data={headlines.articles}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
        </SafeAreaView>
    )
}

export default Headlines;