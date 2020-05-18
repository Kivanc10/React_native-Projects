import React ,{Component} from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";
import {Card} from "./common";
import {selectBook,deselectBook} from "../actions";
import {connect} from "react-redux";

class BookList extends Component {
  componentDidMount(){
    console.log("props ==>");
    console.log(this.props);
  }
  onPressed(){
    const { book ,selected} = this.props;
    selected ? this.props.deselectBook() :
     this.props.selectBook(book);
  }
  render(){
    const { book ,selected } = this.props;
    const descriptionField = selected ? (
        <Text style = {styles.descriptionStyle}>{book.description}</Text>
    ) : null;
    return(
      <TouchableOpacity onPress = {this.onPressed.bind(this)}>
        <View>
          <Card>
            <Text style = {styles.titleStyle}>{book.title}</Text>
            <Text style = {styles.authorStyle}>{book.author}</Text>
          </Card>
          {descriptionField}
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  titleStyle : {
    color : "black",
    fontSize : 15
  },
  authorStyle : {
    color : "gray",
    fontSize : 10
  },
  descriptionStyle : {
    margin : 15,
    justifyContent : "center",
    alignItems : "center"
  }
})

const mapStateToProps = (state,props) => {
  console.log(state);
  const selected = state.selectedBook
      && state.selectedBook.isbn === props.book.isbn
  return {
    selected
  }
}

export default connect(mapStateToProps,{selectBook,deselectBook})(BookList);
