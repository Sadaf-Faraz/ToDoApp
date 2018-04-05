import React from 'react';
import { View, TouchableOpacity, Text, TextInput, ListView, ScrollView} from 'react-native';
import Header from './Header';
import Items from './Items';



export default class ToDo extends React.Component {
constructor(props){
    super(props);

    this.state = {
        itemArray: [],
        itemText:'',    
    
    };}


render() {
const items = 
this.state.itemArray.map((val,key)=>{
    return <Items key={key} keyval={key} val={val}
    deleteMethod={()=> this.itemDelete(key)} />
});
    return(
        <View>
            <Header headerText={'To Do List'} />

{items} 


<View style={styles.addContainer}>  

<TextInput style={styles.textInput} 
onChangeText={(itemText) => this.setState({itemText})}
value={this.state.itemText}
placeholder='Start your to do list'/>



 <TouchableOpacity  
onPress={this.addItem.bind(this)}
style={styles.addButton}>
     <Text style={styles.buttonText}>Add</Text> 
        </TouchableOpacity>
</View>

       </View>


    )
      
}

addItem() {
  if (this.state.itemText){
      this.state.itemArray.push({
      'items': this.state.itemText
    });

      this.setState({itemArray: this.state.itemArray})
      this.setState({itemText: ''});
  }
}
itemDelete(key){
    this.state.itemArray.splice(key, 1);
    this.setState({itemArray:this.state.itemArray})
}
}



const styles={
        addButton: {
        backgroundColor: 'lightslategrey',
        shadowOffset: {width: 0, height: 2},
shadowOpacity: 0.5,
elevation: 2,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      },
buttonText:{
      color:'white',
},
      textInput: {
        alignSelf: 'stretch',
        padding:30,
      
      },
     addContainer:{
          flexDirection: 'row',
          paddingTop:30,
          
      }

}