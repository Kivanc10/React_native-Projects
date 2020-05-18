import React ,{Component} from "react";
import {Text,View,FlatList} from "react-native";
import {connect} from "react-redux";
import BookList from "./bookList";

class BookItem extends Component{
  renderItem({item}){
    return (
      <BookList book = {item} />
    )
  }
  render(){
    return(
      <View>
      <FlatList
      data = {this.props.books}
      renderItem = {this.renderItem}
      keyExtractor = {(item) => item.isbn}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    books : state.books
  }
}
export default connect(mapStateToProps)(BookItem);
