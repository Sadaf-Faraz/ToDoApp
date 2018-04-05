import React from 'react';
import { Text, View, TextInput, Button, ListView, TouchableOpacity } from 'react-native';
import Header from './Header';
import Items from './Items';

export default class ToDoApp extends React.Component {
    constructor(props) {
        super(props);


 const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>
                r1 !== r2
        });

        this.state = {
            itemText: '',
            checked: false,
            dataSource: ds.cloneWithRows([]),
        };

        this.addText = this.addText.bind(this);
       // this.deleteText = this.deleteText.bind(this);
    }

    
    addText = (value) => {
        const itemText = value;
        this.setState(() => ({
            itemText,
        }));
    }
//BUTTONS FUNCTIONs

//add
    addButton = () => {
       if (!this.state.itemText) {
          return;
        }


        const itemTextArray = this.state.dataSource._dataBlob.s1;
        itemTextArray.push(this.state.itemText);
        this.setState(() => ({
            dataSource: this.state.dataSource.cloneWithRows(itemTextArray),
            itemText: '',
        }));

    };


//check
    press = () => {
        this.setState((state) => ({
            checked: !state.checked,
        }));
    }
    
render() {
    return (

          <View>
     <Header headerText={'To Do List'} />

{/*Where the TO DO list will be displayed*/}


{/*Placeholder*/}

<TextInput 
style={styles.textInput} 
value={this.state.itemText}
onChangeText={this.state.addText}
placeholder='Start your to do list'/>  


{/*Add Button*/}

 <TouchableOpacity  
onPress={this.addButton}
style={styles.addButton}>
     <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>

<ListView
dataSource={this.state.dataSource}
renderRow={(rowData,sectionId, rowId) => {
    const handleDelete = () => {
        return this.deleteButton(rowId);
    }
    return (
        <View>
        <Text>{rowData}</Text> 


{/* <Button
onPress={handleDelete} 
style={styles.itemDelete}
/>
*/}
</View>
    );
}
}
/>
</View>
    )
}
}

const styles= {
addButton:{
    backgroundColor: 'lightcyan',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    
  
    },

textInput: {
        alignSelf: 'stretch',
        padding:30,
      
      },

}